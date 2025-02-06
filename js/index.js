// hiding & showing password
const togglePassword = document.getElementById('togglePassword');
    const passwordField = document.getElementById('password');

    togglePassword.addEventListener('click', function () {
        // Toggle the password field visibility
        const type = passwordField.type === 'password' ? 'text' : 'password';
        passwordField.type = type;

        // Change the icon accordingly
        this.innerHTML = type === 'password' ?'<i class="fa fa-eye-slash"></i>':'<i class="fa fa-eye"></i>';
    });

// confermation for login
// script.js
const validUsername = 'user@gmail.com';
const validPassword = '2024';

document.getElementById('user-login').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    const username = document.getElementById('userName').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');
    
    // Validate credentials
    if (username === validUsername && password === validPassword) {
        // Redirect to the home page
        window.location.href = 'href/home.html';
    }else {
        // Show error message
        message.style.display = 'block';
    }
});