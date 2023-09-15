export function init() {
  class TextInputWC extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    render() {
      const textoOriginal = this.textContent;
      var shadow = this.attachShadow({ mode: "open" });

      var style = document.createElement("style");
      style.textContent = `
      .root {
        width: 100%;
        max-width: 355px;
      }
      
      .input-label {
        font-size: 18px;
        font-weight: 400;
      }
      
      .text-input {
        width: 100%;
        height: 55px;
        border-radius: 4px;
        border: 2px solid #000;
        padding: 0px 7px;
        font-size: 22px;
        box-sizing: border-box;
      }
      `;
      shadow.appendChild(style);

      var div = document.createElement("div");
      div.classList.add("root");

      var label = document.createElement("label");
      label.classList.add("input-label");
      label.textContent = textoOriginal;
      div.appendChild(label);

      var textInput = document.createElement("input");
      textInput.type = "text";
      textInput.classList.add("text-input");
      div.appendChild(textInput);

      shadow.appendChild(div);
    }
  }

  customElements.define("text-input-wc", TextInputWC);
}
