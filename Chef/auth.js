// DOM Elements
const loginForm = document.getElementById("loginForm")
const registerForm = document.getElementById("registerForm")

// Initialize page
function init() {
  // Add event listeners to forms
  if (loginForm) {
    loginForm.addEventListener("submit", handleLogin)
  }

  if (registerForm) {
    registerForm.addEventListener("submit", handleRegister)
  }

  // Check if user is already logged in
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true"
  if (isLoggedIn) {
    window.location.href = "index.html"
  }
}

// Handle login form submission
function handleLogin(e) {
  e.preventDefault()

  const email = document.getElementById("email").value
  const password = document.getElementById("password").value

  // Get users from local storage
  const users = JSON.parse(localStorage.getItem("users")) || []

  // Find user with matching email and password
  const user = users.find((u) => u.email === email && u.password === password)

  if (user) {
    // Set login status in local storage
    localStorage.setItem("isLoggedIn", "true")
    localStorage.setItem(
      "user",
      JSON.stringify({
        name: user.name,
        email: user.email,
      }),
    )

    // Redirect to home page
    window.location.href = "index.html"
  } else {
    alert("Invalid email or password. Please try again.")
  }
}

// Handle register form submission
function handleRegister(e) {
  e.preventDefault()

  const name = document.getElementById("name").value
  const email = document.getElementById("email").value
  const password = document.getElementById("password").value
  const confirmPassword = document.getElementById("confirmPassword").value

  // Validate passwords match
  if (password !== confirmPassword) {
    alert("Passwords do not match. Please try again.")
    return
  }

  // Get existing users from local storage
  const users = JSON.parse(localStorage.getItem("users")) || []

  // Check if email already exists
  if (users.some((user) => user.email === email)) {
    alert("Email already exists. Please use a different email or login.")
    return
  }

  // Add new user
  users.push({
    name,
    email,
    password,
  })

  // Save users to local storage
  localStorage.setItem("users", JSON.stringify(users))

  // Set login status
  localStorage.setItem("isLoggedIn", "true")
  localStorage.setItem(
    "user",
    JSON.stringify({
      name,
      email,
    }),
  )

  // Redirect to home page
  window.location.href = "index.html"
}

// Initialize the page when DOM is loaded
document.addEventListener("DOMContentLoaded", init)
