// Grab the form and assign it to variable
const form = document.querySelector("form");

/**
 * Convert a measurement from user input.
 * @param {Number} userInput
 * @returns {Number} - return the converted measurement
 */
function dynesToNewtons(userInput) {
  /* TODO: Update the name of this function to something appropriate (e.g. feetToInches...) */
  return Math.pow(userInput, 5);
}

/** Capture the user's input value on submit and run it through the convert fxn.
 */
function submitHandler() {
  // Grab the input text box value
  const userInput = document.querySelector("#user-input").value;

  // Convert input value using converter function
  const userOutput = dynesToNewtons(userInput);

  // Grab the p html tag
  const p = document.querySelector("#user-output");

  // Output conversion statement to p tag
  p.textContent = `${userInput.toLocaleString()} dyne(s) is ${userOutput.toLocaleString()} Newton(s)!`;
}

// Add a listener to the form
form.addEventListener("submit", submitHandler);
