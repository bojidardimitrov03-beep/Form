const form = document.getElementById("form");
const country = document.getElementById("country");
const postalCode = document.getElementById("postal-code");
const email = document.getElementById("Email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
  };
  
  const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
  };

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const countryValue = country.value.trim();
  const postalCodeValue = postalCode.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const confirmPasswordValue = confirmPassword.value.trim();

  if (countryValue === "") {
    setError(country, "Country is Required!");
  } else {
    setSuccess(country);
  }

  if (emailValue === "") {
    setError(email, "Email is Required!");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid Email!");
  } else {
    setSuccess(email);
  }

  if (postalCodeValue === "") {
    setError(postalCode, "Postal Code is Required!");
  } else {
    setSuccess(postalCode);
  }

  if (passwordValue === "") {
    setError(password, "Password is Required!");
  } else if (passwordValue.length < 8) {
    setError(password, "Password should be at least 8 characters!");
  } else if (passwordValue.length > 20) {
    setError(password, "Password should be less than 20 characters!");
  } else {
    setSuccess(password);
  }

  if (confirmPasswordValue === "") {
    setError(confirmPassword, "You should confirm your Password!");
  } else if (confirmPasswordValue !== passwordValue) {
    setError(confirmPassword, "Passwords should match!");
  } else {
    setSuccess(confirmPassword);
  }
};
country.addEventListener('blur', () => {
    if (country.value.trim() === '') {
      setError(country, 'Country is Required!');
    } else {
      setSuccess(country);
    }
  });
  
  email.addEventListener('blur', () => {
    if (email.value.trim() === '') {
      setError(email, 'Email is Required!');
    } else if (!isValidEmail(email.value.trim())) {
      setError(email, 'Provide a valid Email!');
    } else {
      setSuccess(email);
    }
  });
  
  postalCode.addEventListener('blur', () => {
    if (postalCode.value.trim() === '') {
      setError(postalCode, 'Postal Code is Required!');
    } else {
      setSuccess(postalCode);
    }
  });
  
  password.addEventListener('blur', () => {
    if (password.value.trim() === '') {
      setError(password, 'Password is Required!');
    } else if (password.value.trim().length < 8) {
      setError(password, 'Password should be at least 8 characters!');
    } else if (password.value.trim().length > 20) {
      setError(password, 'Password should be less than 20 characters!');
    } else {
      setSuccess(password);
    }
  });
  
  confirmPassword.addEventListener('blur', () => {
    if (confirmPassword.value.trim() === '') {
      setError(confirmPassword, 'You should confirm your Password!');
    } else if (confirmPassword.value.trim() !== password.value.trim()) {
      setError(confirmPassword, 'Passwords should match!');
    } else {
      setSuccess(confirmPassword);
    }
  });