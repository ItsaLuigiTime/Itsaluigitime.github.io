// JavaScript code for form validation
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("myForm");

  // Prevent form from submitting
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Stop the form from actually submitting

    // Retrieve the input field value
    const input = document.getElementById("inputField");
    const inputValue = input.value.trim();

    // Regular expression pattern for alphanumeric input (letters and numbers only)
    const alphanumericRegex = /^[a-zA-Z0-9]+$/;

    // Check if the input value matches the pattern using RegExp.prototype.test()
    const isValid = alphanumericRegex.test(inputValue);

    if (isValid) {
      // Valid input: display confirmation and simulate form submission
      showMessage("Success! Your input has been submitted.", "green");

      // Simulate form submission by clearing the input field
      setTimeout(() => {
        input.value = "";
      }, 1000);
    } else {
      // Invalid input: display error message
      showMessage("Error: Input must be alphanumeric (letters and numbers only).", "red");
    }
  });

  // Function to display messages below the form
  function showMessage(messageText, color) {
    let message = document.getElementById("message");
    if (!message) {
      message = document.createElement("p");
      message.id = "message";
      document.getElementById("myForm").appendChild(message);
    }
    message.textContent = messageText;
    message.style.color = color;
  }
});
