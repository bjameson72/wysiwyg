export default function addTitle(event) {
  // create element (section w/ the class of 'editable-text')
  const newEditableText = document.createElement("wysiwyg-editable-heading");
  const buttonDiv = event.target.parentElement;
  document.querySelector("main").insertBefore(newEditableText, buttonDiv);
}
