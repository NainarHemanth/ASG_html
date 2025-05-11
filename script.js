function showMessage() {
  document.getElementById("message").innerText = "Thanks for clicking! You're exploring the web app Deployed through AWS.";
}

// Form handling
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message) {
    document.getElementById("formResponse").innerText = `Thanks, ${name}! We received your message.`;
    this.reset();
  } else {
    document.getElementById("formResponse").innerText = "Please fill out all fields.";
  }
});
