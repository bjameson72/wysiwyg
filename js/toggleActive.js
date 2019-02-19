/**
 * Toggles active class on editable-text
 * @param {Event} event
 */
export default function toggleActive(event) {
  //   const toggleButton = document.querySelectorAll(".save-button");
  //   toggleButton.forEach(button => ".save-button");
  // get the parent element
  console.log(event);
  const editableText = event.target.parentElement;
  // toggle the class active
  editableText.classList.toggle("active");
}
