export function init() {
  class OutlinedButtonWC extends HTMLElement {
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
        max-width: 352px;
        height: 55px;
        border-radius: 4px;
        border: 2px solid #000;
        background: #ffffff;
        cursor: pointer;
        font-family: "Roboto", sans-serif;
        font-size: 22px;
        font-weight: 500;
      }

      .root:hover {
        background: #eaeaea;
      }

      .root:active {
        background: #ffffff;
      }
      `;
      shadow.appendChild(style);

      var button = document.createElement("button");
      button.classList.add("root");
      button.textContent = textoOriginal;
      shadow.appendChild(button);
    }
  }

  customElements.define("outlined-button-wc", OutlinedButtonWC);
}
