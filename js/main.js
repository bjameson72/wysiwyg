// function that adds a class to editable-text
import toggleActive from "./toggleActive.js";
import handleEditorInput from "./handleEditorInput.js";
import addParagraph from "./addParagraph.js";

// select edit buttons
// add event listener
document
  .querySelectorAll(".edit-button, .save-button")
  .forEach(button => button.addEventListener("click", toggleActive));

// listen for 'input' events from editor
// when fired, update text (or style) of sibling
// '.text-element'
document
  .querySelectorAll(".editor")
  .forEach(editor => editor.addEventListener("input", handleEditorInput));

document.getElementById("add-button").addEventListener("click", addParagraph);
