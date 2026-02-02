function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === "" || password === "") {
    alert("Please fill all fields");
    return;
  }

  
  if (email === "admin@parkease.com" && password === "admin123") {
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid credentials");
  }
}

function logout() {
  window.location.href = "index.html";
}