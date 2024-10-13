
// Toggle mobile menu
const navToggle = document.getElementById('nav-toggle');
const navMenuMobile = document.getElementById('nav-menu-mobile');
const navClose = document.getElementById('nav-close');

navToggle.addEventListener('click', () => {
    navMenuMobile.classList.toggle('hidden');
});

navClose.addEventListener('click', () => {
    navMenuMobile.classList.add('hidden');
});

// Theme switcher (optional)
const themeButton = document.getElementById('theme-button');
const body = document.body;

themeButton.addEventListener('click', () => {
    body.classList.toggle('dark');
});

// Select the form and the fields
const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const subjectInput = document.getElementById('subject');
const descriptionInput = document.getElementById('description');

// Add event listener for form submission
contactForm.addEventListener('submit', function(event) {
event.preventDefault(); // Prevent default form submission behavior

// Simple validation
if (!validateForm()) {
alert('Please fill out all fields correctly.');
return;
}

// If validation passes, you can now submit the form data
const formData = {
name: nameInput.value,
email: emailInput.value,
subject: subjectInput.value,
description: descriptionInput.value,
};

// Example: Submit form data via a fake API or send it to your server
console.log('Form submitted', formData);

// Optionally, clear form after submission
contactForm.reset();
});

// Validation function
function validateForm() {
let isValid = true;

if (nameInput.value.trim() === '') {
isValid = false;
}

if (!validateEmail(emailInput.value)) {
isValid = false;
}

if (subjectInput.value.trim() === '') {
isValid = false;
}

if (descriptionInput.value.trim() === '') {
isValid = false;
}

return isValid;
}

// Helper function to validate email format
function validateEmail(email) {
const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return re.test(String(email).toLowerCase());
}

