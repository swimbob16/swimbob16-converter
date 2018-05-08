// Grab the form and assign it to variable
const button = document.querySelector("#convert-button");

const userInputField = document.querySelector("#user-input");

/**
 * Convert a measurement from user input.
 * @param {Number} newtons
 * @returns {Number} - return the converted measurement
 */
function newtonsToDynes(newtons) {
  return newtons * Math.pow(10, 5); // Newton to dyne conversion
}

/** Capture the user's input value on submit and run it through the convert fxn.
 */
function clickHandler() {
  // Grab the input text box value
  const newtons = document.querySelector("#user-input").value;

  // Convert input value using converter function
  const dynes = newtonsToDynes(newtons);

  // Output conversion statement to p tag
  document.querySelector(
    "#user-output"
  ).textContent = `${newtons.toLocaleString()} newtons is equal to ${dynes.toLocaleString()} dynes!`;
}

// Add a listener to the button
button.addEventListener("click", clickHandler);
userInputField.addEventListener("keyup", clickHandler);
