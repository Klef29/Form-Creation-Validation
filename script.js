document.addEventListener("DOMContentLoaded", function () {
  // Step 1: Select the form
  const form = document.getElementById("registration-form");

  // Step 2: Select the feedback division
  const feedbackDiv = document.getElementById("form-feedback");

  // Step 3: Add submit event listener
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting

    // Step 4: Get input values and trim
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Step 5: Initialize validation
    let isValid = true;
    let messages = [];

    // Username validation
    if (username.length < 3) {
      isValid = false;
      messages.push("Username must be at least 3 characters long.");
    }

    // Email validation
    if (!email.includes("@") || !email.includes(".")) {
      isValid = false;
      messages.push("Please enter a valid email address.");
    }

    // Password validation
    if (password.length < 8) {
      isValid = false;
      messages.push("Password must be at least 8 characters long.");
    }

    // Step 6: Show feedback
    feedbackDiv.style.display = "block";

    if (isValid) {
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#28a745"; // Green
    } else {
      feedbackDiv.innerHTML = messages.join("<br>");
      feedbackDiv.style.color = "#dc3545"; // Red
    }
  });
});
