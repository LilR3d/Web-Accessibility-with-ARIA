document.addEventListener("DOMContentLoaded", function () {
  const skipLink = document.querySelector(".skip-link");
  const mainContent = document.querySelector("#main");

  if (skipLink && mainContent) {
    skipLink.addEventListener("click", function (e) {
      e.preventDefault();
      mainContent.setAttribute("tabindex", "-1"); // make focusable
      mainContent.focus();
    });
  }
});

// Submit button
const submitButton = document.querySelector(
  "button[aria-label='Submit the contact form']"
);
if (submitButton) {
  submitButton.addEventListener("click", function () {
    alert("Form submitted! (This is just a demo.)");
  });
}

// Email input validation
const emailInput = document.getElementById("email-input");
if (emailInput) {
  const feedback = document.createElement("div");
  feedback.setAttribute("role", "status");
  feedback.setAttribute("aria-live", "polite");
  feedback.style.marginTop = "8px";
  emailInput.insertAdjacentElement("afterend", feedback);

  emailInput.addEventListener("input", function () {
    if (emailInput.value.includes("@")) {
      feedback.textContent = "Looks like a valid email format.";
    } else {
      feedback.textContent = "Please include an '@' symbol.";
    }
  });
}
