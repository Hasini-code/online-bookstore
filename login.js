const showRegister = document.getElementById("showRegister");
const showLogin = document.getElementById("showLogin");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const formTitle = document.getElementById("form-title");

showRegister.addEventListener("click", () => {
  loginForm.style.display = "none";
  registerForm.style.display = "flex";
  formTitle.textContent = "Register";
});

showLogin.addEventListener("click", () => {
  registerForm.style.display = "none";
  loginForm.style.display = "flex";
  formTitle.textContent = "Login";
});
