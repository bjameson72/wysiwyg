/**
 * Toggles active class on editable-text
 * @param {Event} event
 */
export default function toggleActive(event) {
  // get the parent element
  console.log(event);
  const editableText = event.target.parentElement;
  // toggle the class active
  editableText.classList.toggle('active');
}
