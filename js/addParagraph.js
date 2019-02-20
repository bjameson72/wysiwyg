export default function addParagraph(event) {
  // create element (section w/ the class of 'editable-text')
  const newEditableText = document.createElement("wysiwyg-editable-text");
  console.log(event.target);
  const buttonDiv = event.target.parentElement;
  document.querySelector("main").insertBefore(newEditableText, buttonDiv);
}
