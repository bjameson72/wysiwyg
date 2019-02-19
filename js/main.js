// function that adds a class to editable-text
import toggleActive from "./toggleActive.js";

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

// update text (or style) of sibling '.text-element'
function handleEditorInput(event) {
  if (event.target.type === "text" || event.target.tagName === "TEXTAREA") {
    const textElement = event.currentTarget.parentNode.querySelector(
      ".text-element"
    );
    const text = event.target.value;
    textElement.innerText = text;
  }
}
