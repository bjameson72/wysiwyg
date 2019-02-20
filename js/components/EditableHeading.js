import EditableText from "./EditableText.js";

export default class EditableHeading extends EditableText {
  static get observedAttributes() {
    console.log("hey");
    return ["heading"];
  }

  // getter/setter for heading
  get heading() {
    // this.heading
    if (this.hasAttribute("heading")) {
      return this.getAttribute("heading");
    }
    return "h1";
  }

  set heading(val) {
    this.setAttribute("heading", val);
    // element.heading = 'h2'
  }

  render() {
    this.innerHTML = `
            <button type="button" class="edit-button">Edit</button>
            <button type="button" class="save-button">Save</button>
            <${this.heading} class="text-element">Title here</${this.heading}>
    
            <wysiwyg-editor type="title"></wysiwyg-editor>
            `;

    // select edit buttons
    // add event listener
    this.querySelectorAll(".edit-button, .save-button").forEach(button =>
      button.addEventListener("click", this.toggleActive)
    );

    // actions up
    this.querySelector("wysiwyg-editor").addEventListener(
      "input",
      this.handleInput
    );
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    // console.log(attrName, oldVal, newVal);
    this.render();
  }

  handleInput(event) {
    const textElement = this.querySelector(".text-element");

    // if (event.target.type === "text" || event.target.tagName === "TEXTAREA") {

    //   const text = event.target.value;
    //   textElement.innerText = text;
    // } else {
    //   //   handle styles
    //   // const value = event.target.value;
    //   // const styleName = event.target.name;
    //   const { value, name: styleName } = event.target;
    //   const unit = event.target.dataset.unit || "";
    //   textElement.style[styleName] = `${value}${unit}`;
    if (event.target.name === "heading-type") {
      this.heading = event.target.value;
    } else {
      super.handleInput(event);
    }
  }
}
