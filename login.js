// Toggle between login and register forms
const showLogin = document.getElementById("showLogin");
const showRegister = document.getElementById("showRegister");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const formTitle = document.getElementById("form-title");

showLogin.addEventListener("click", () => {
  loginForm.style.display = "flex";
  registerForm.style.display = "none";
  formTitle.textContent = "Login";
});

showRegister.addEventListener("click", () => {
  loginForm.style.display = "none";
  registerForm.style.display = "flex";
  formTitle.textContent = "Register";
});