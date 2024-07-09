document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const submitButton = document.getElementById('submit-button');

    function validatePassword() {
        const passwordValue = password.value;
        const confirmPasswordValue = confirmPassword.value;

        let valid = true;

        if (passwordValue.length < 8) {
            password.style.borderColor = 'red';
            valid = false;
        } 
        else {
            password.style.borderColor = '#893eeb';
        }

        if (passwordValue !== confirmPasswordValue) {
            confirmPassword.style.borderColor = 'red';
            valid = false;
        } 
        else {
            confirmPassword.style.borderColor = '#893eeb';
        }
        submitButton.disabled = !valid;
    }

    password.addEventListener('input', validatePassword);
    confirmPassword.addEventListener('input', validatePassword);

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const registrationData = {
            name: form.name.value,
            username: form.username.value,
            email: form.email.value,
            password: form.password.value
        };

        console.log(registrationData);
        alert(JSON.stringify(registrationData, null, 2));
    });
});