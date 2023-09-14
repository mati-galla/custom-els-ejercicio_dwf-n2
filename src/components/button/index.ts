export function init() {
  class buttonWC extends HTMLElement {
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
        border: none;
        background: #9cbbe9;
        cursor: pointer;
        font-family: "Roboto", sans-serif;
        font-size: 22px;
        font-weight: 500;
      }

      .root:hover {
        background: #87a1c8;
      }
      
      .root:active {
        background: #abcdff;
      }
      `;

      shadow.appendChild(style);

      var button = document.createElement("button");
      button.classList.add("root");
      button.textContent = textoOriginal;
      shadow.appendChild(button);
    }
  }

  customElements.define("button-wc", buttonWC);
}
