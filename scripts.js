// Grab the form and assign it to variable
const form = document.querySelector("form");

/**
 * Convert a measurement from user input.
 * @param {Number} userInput
 * @returns {Number} - return the converted measurement
 */
function newtonsToDynes(userInput) {
  /* TODO: Update the name of this function to something appropriate (e.g. feetToInches...) */
  return userInput * Math.pow(10, 5);
}

/** Capture the user's input value on submit and run it through the convert fxn.
 */
function submitHandler() {
  // Grab the input text box value
  const userInput = document.querySelector("#user-input").value;

  // Convert input value using converter function
  const userOutput = newtonsToDynes(userInput);

  // Grab the p html tag
  const p = document.querySelector("#user-output");

  // Output conversion statement to p tag
  p.textContent = `${userInput.toLocaleString()} newtons is equal to ${userOutput.toLocaleString()} dynes!`;
}

// Add a listener to the form
form.addEventListener("submit", submitHandler);
