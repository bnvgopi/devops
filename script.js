document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Clear previous errors
    document.getElementById('firstNameError').textContent = '';
    document.getElementById('lastNameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';

    let valid = true;

    // First name validation
    const firstName = document.getElementById('firstName').value;
    if (!/^[a-zA-Z]+$/.test(firstName)) {
        valid = false;
        document.getElementById('firstNameError').textContent = 'First name must contain only letters.';
    }

    // Last name validation
    const lastName = document.getElementById('lastName').value;
    if (!/^[a-zA-Z]+$/.test(lastName)) {
        valid = false;
        document.getElementById('lastNameError').textContent = 'Last name must contain only letters.';
    }

    // Email validation
    const email = document.getElementById('email').value;
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        valid = false;
        document.getElementById('emailError').textContent = 'Enter a valid email address.';
    }

    // Password validation
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
        valid = false;
        document.getElementById('passwordError').textContent = 'Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character.';
    } else if (password !== confirmPassword) {
        valid = false;
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
    }

    if (valid) {
        alert('Registration successful!');
    }
});
