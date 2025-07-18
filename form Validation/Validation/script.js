function validateForm() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let password = document.getElementById("password").value.trim();

  let nameError = document.getElementById("nameError");
  let emailError = document.getElementById("emailError");
  let phoneError = document.getElementById("phoneError");
  let passwordError = document.getElementById("passwordError");

  let isValid = true;

  if (name === "") {
    nameError.innerText = "Name required";
    isValid = false;
  } else {
    nameError.innerText = "";
  }

  if (email === "") {
    emailError.innerText = "Email required";
    isValid = false;
  } else if (!/^\S+@\S+\.\S+$/.test(email)) {
    emailError.innerText = "Invalid email";
    isValid = false;
  } else {
    emailError.innerText = "";
  }

  if (phone === "") {
    phoneError.innerText = "Phone required";
    isValid = false;
  } else if (!/^\d{10}$/.test(phone)) {
    phoneError.innerText = "Enter 10 digit number";
    isValid = false;
  } else {
    phoneError.innerText = "";
  }

  if (password === "") {
    passwordError.innerText = "Password required";
    isValid = false;
  } else if (password.length < 6) {
    passwordError.innerText = "Minimum 6 characters";
    isValid = false;
  } else {
    passwordError.innerText = "";
  }

  return isValid;
}
