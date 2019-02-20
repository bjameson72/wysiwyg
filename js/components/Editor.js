export default class Editor extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  get type() {
    if (this.getAttribute("type")) {
      return this.getAttribute("type");
    } else {
      return "paragraph";
    }
  }

  set type(newType) {
    this.setAttribute("type", newType);
  }

  isTitle() {
    return this.type === "title";
  }

  render() {
    const headingInput = `<div class="form-group">
  <label>
    Heading type:
    <select name="heading-type">
      <option value="h1">h1</option>
      <option value="h2">h2</option>
      <option value="h3">h3</option>
      <option value="h4">h4</option>
      <option value="h5">h5</option>
      <option value="h6">h6</option>
    </select>
  </label>
</div> `;
    const titleText = `<input type='text' value='Title here' />`;
    const paraText = `<textarea cols="40" rows="5">Go ahead, edit me however you want!</textarea>`;
    this.innerHTML = `
    ${this.isTitle() ? titleText : paraText}

        <section class="styles">
          <div class="form-group">
            <label>
              Font color:
              <input type="color" name="color" />
            </label>
          </div>

          <div class="form-group">
            <label>
              Font size:
              <input
                type="number"
                name="font-size"
                data-unit="px"
                value="${this.isTitle() ? "32" : "16"}"
              />
              px
            </label>
          </div>

          <div class="form-group">
            <label>
              Font family:
              <select name="font-family">
                <option value="sans-serif">sans-serif</option>
                <option value="serif">serif</option>
              </select>
            </label>
          </div>
        </section>

        
    ${this.isTitle() ? headingInput : ""}
    </section>
        `;
  }
}
