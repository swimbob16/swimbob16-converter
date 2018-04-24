// Grab the form and assign it to variable
const form = document.querySelector("form");

/**
 * Convert a measurement from user input.
 * @param {Number} userInput
 * @returns {Number} - return the converted measurement
 */
function dynesToNewtons() {
  /* TODO: Update the name of this function to something appropriate (e.g. feetToInches...) */
}

/** Capture the user's input value on submit and run it through the convert fxn.
 */
function submitHandler() {
  /*
    1. Grab the VALUE PROPERY of: document.querySelector("#user-input")...(finish this code)...
    2. Pass that value into convert() fxn. to get back the converted value.
    3. Give the user the output by updating the TEXTVALUE PROPERTY of: document.querySelector("#user-output")
  */
}

// Add a listener to the form
form.addEventListener("submit", submitHandler);
