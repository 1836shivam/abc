function validateForm() {
  // get form values
  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phoneNumber = document.getElementById("phoneNumber").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();

  // validate full name
  if (fullName.length < 5) {
    alert("Full name must be at least 5 characters");
    return false;
  }

  // validate email
  if (!email.includes("@")) {
    alert("Enter a valid email address");
    return false;
  }

  // validate phone number
  if (phoneNumber.length !== 10 || phoneNumber === "1234567890") {
    alert("Enter a valid 10 digit phone number");
    return false;
  }

  // validate password
  if (
    password.length < 8 ||
    password.toLowerCase() === "password" ||
    password.toLowerCase() === fullName.toLowerCase()
  ) {
    alert("Password must be at least 8 characters and not include 'password' or your name");
    return false;
  }

  // validate confirm password
  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return false;
  }

  // form is valid
  alert("Form submitted successfully");
  return true;
}