// function that adds a class to editable-text

import handleEditorInput from "./handleEditorInput.js";
import addParagraph from "./addParagraph.js";
import addTitle from "./addTitle.js";

import Editor from "./components/Editor.js";
import EditableText from "./components/EditableText.js";
import EditableHeading from "./components/EditableHeading.js";

customElements.define("wysiwyg-editor", Editor);
customElements.define("wysiwyg-editable-text", EditableText);
customElements.define("wysiwyg-editable-heading", EditableHeading);

// when fired, update text (or style) of sibling
// '.text-element'
document
  .querySelectorAll(".editor")
  .forEach(editor => editor.addEventListener("input", handleEditorInput));

// document
//   .querySelectorAll(".add-button")
//   .forEach(button => button.addEventListener("click", addParagraph));

document.getElementById("add-button-p").addEventListener("click", addParagraph);
document.getElementById("add-button-t").addEventListener("click", addTitle);
