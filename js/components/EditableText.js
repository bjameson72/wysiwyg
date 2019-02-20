export default class EditableText extends HTMLElement {
  constructor() {
    super();

    this.toggleActive = this.toggleActive.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  get active() {
    return this.hasAttribute("active");
  }

  set active(isActive) {
    if (isActive) {
      this.setAttribute("active", "");
    } else {
      this.removeAttribute("active");
    }
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <button type="button" class="edit-button">Edit</button>
        <button type="button" class="save-button">Save</button>
        <p class="text-element">Go ahead, edit me however you want!</p>

        <wysiwyg-editor type="paragraph"></wysiwyg-editor>
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

  toggleActive() {
    // toggle the class active
    // this.classList.toggle("active"); // not good to change class
    // this.setAttribute('active', '');
    // if (this.hasAttribute("active")) {
    //   this.removeAttribute("active");
    // } else {
    //   this.setAttribute("active", "");
    // }
    this.active = !this.active;
  }

  handleInput(event) {
    const textElement = this.querySelector(".text-element");
    if (event.target.type === "text" || event.target.tagName === "TEXTAREA") {
      const text = event.target.value;
      textElement.innerText = text;
    } else {
      //   handle styles
      // const value = event.target.value;
      // const styleName = event.target.name;
      const { value, name: styleName } = event.target;
      const unit = event.target.dataset.unit || "";
      textElement.style[styleName] = `${value}${unit}`;
    }
  }
}
