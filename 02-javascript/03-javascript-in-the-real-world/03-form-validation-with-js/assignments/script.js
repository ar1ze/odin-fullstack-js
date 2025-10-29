// ==== DOM ELEMENTS ====
const elements = {
  email: document.getElementById('email'),
  country: document.getElementById('country'),
  postal: document.getElementById('postal-code'),
  password: document.getElementById('password'),
  confirmPassword: document.getElementById('confirm-password'),
  form: document.getElementById('signup-form'),
  success: document.getElementById('success'),
};

const setValid = function setValid(input, errorSpan) {
  input.classList.remove('invalid');
  input.classList.add('valid');
  errorSpan.textContent = '';
};

const setInvalid = function setInvalid(input, errorSpan, message) {
  input.classList.remove('valid');
  input.classList.add('invalid');
  errorSpan.textContent = message;
};

// ==== VALIDATION FUNCTIONS ====
const validateEmail = function validateEmail() {
  const value = elements.email.value.trim();
  const errorSpan = document.getElementById('email-error');

  if (value === '') {
    return setInvalid(elements.email, errorSpan, 'Email is required'), false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;
  if (!emailPattern.test(value)) {
    return (
      setInvalid(elements.email, errorSpan, 'Please enter a valid email'), false
    );
  }

  setValid(elements.email, errorSpan);
  return true;
};

const validateCountry = function validateCountry() {
  const value = elements.country.value.trim();
  const errorSpan = document.getElementById('country-error');

  if (value === '') {
    return (
      setInvalid(elements.country, errorSpan, 'Country is required'), false
    );
  }

  const countryPattern = /^[A-Z][a-z]+$/;
  if (!countryPattern.test(value)) {
    return (
      setInvalid(
        elements.country,
        errorSpan,
        'Must start with a capital letter'
      ),
      false
    );
  }

  setValid(elements.country, errorSpan);
  return true;
};

const validatePostal = function validatePostal() {
  const value = elements.postal.value.trim();
  const errorSpan = document.getElementById('postal-error');

  if (value === '') {
    return (
      setInvalid(elements.postal, errorSpan, 'Postal code is required'), false
    );
  }

  const postalPattern = /^(\d{3}\s\d{2}|\d{5})$/;
  if (!postalPattern.test(value)) {
    return (
      setInvalid(elements.postal, errorSpan, 'Use XXX XX or XXXXX format'),
      false
    );
  }

  setValid(elements.postal, errorSpan);
  return true;
};

const validatePassword = function validatePassword() {
  const value = elements.password.value;
  const errorSpan = document.getElementById('password-error');

  if (value === '') {
    return (
      setInvalid(elements.password, errorSpan, 'Password is required'), false
    );
  }

  const rules = [
    [value.length >= 8 && value.length <= 16, '8–16 characters required'],
    [/[A-Z]/.test(value), 'Include at least one capital letter'],
    [/[0-9]/.test(value), 'Include at least one number'],
    [/[!@#$%^&*(),.?":{}|<>]/.test(value), 'Include at least one symbol'],
  ];

  for (const [isValid, message] of rules) {
    if (!isValid)
      return setInvalid(elements.password, errorSpan, message), false;
  }

  setValid(elements.password, errorSpan);
  if (elements.confirmPassword.value) validateConfirmPassword();
  return true;
};

const validateConfirmPassword = function validateConfirmPassword() {
  const value = elements.confirmPassword.value;
  const errorSpan = document.getElementById('confirm-error');

  if (value === '') {
    return (
      setInvalid(
        elements.confirmPassword,
        errorSpan,
        'Please confirm password'
      ),
      false
    );
  }

  if (value !== elements.password.value) {
    return (
      setInvalid(elements.confirmPassword, errorSpan, 'Passwords do not match'),
      false
    );
  }

  setValid(elements.confirmPassword, errorSpan);
  return true;
};

// ==== EVENT REGISTRATION ====
const inputValidators = {
  email: validateEmail,
  country: validateCountry,
  postal: validatePostal,
  password: validatePassword,
  confirmPassword: validateConfirmPassword,
};

Object.entries(inputValidators).forEach(([key, validator]) => {
  const input = elements[key];
  input.addEventListener('blur', validator);
  input.addEventListener('input', validator);
});

// ==== FORM SUBMIT HANDLER ====
elements.form.addEventListener('submit', (e) => {
  e.preventDefault();

  const allValid = Object.values(inputValidators).every((fn) => fn());
  if (!allValid) return;

  elements.success.classList.add('show');
  elements.form.reset();

  Object.values(elements)
    .filter((el) => el instanceof HTMLInputElement)
    .forEach((input) => input.classList.remove('valid', 'invalid'));

  setTimeout(() => elements.success.classList.remove('show'), 3000);
});
