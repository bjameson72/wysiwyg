// function that adds a class to editable-text
import toggleActive from "./toggleActive.js";

// select edit buttons
const editButtons = document.querySelectorAll(".edit-button, .save-button");

// add event listener
editButtons.forEach(button => button.addEventListener("click", toggleActive));
