document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const address = document.getElementById('address');
    const city = document.getElementById('city');
    const country = document.getElementById('country');
    const postalCode = document.getElementById('postalCode');
    const email = document.getElementById('email');

    const namePattern = /^[A-Za-z]+$/;
    const postalCodePattern = /^\d{5}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let errors = [];

        if (!namePattern.test(firstName.value)) {
            errors.push('First name should contain only letters.');
        }

        if (!namePattern.test(lastName.value)) {
            errors.push('Last name should contain only letters.');
        }

        if (!postalCodePattern.test(postalCode.value)) {
            errors.push('Postal code should consist of 5 digits.');
        }

        if (!emailPattern.test(email.value)) {
            errors.push('Invalid email format.');
        }

        const feedback = document.getElementById('feedback');
        if (errors.length === 0) {
            feedback.innerHTML = '<div class="alert alert-success">Form submitted successfully!</div>';
        } else {
            feedback.innerHTML = `<div class="alert alert-danger">${errors.join('<br>')}</div>`;
        }
    });
});
