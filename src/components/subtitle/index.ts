export function init() {
  class subtitleWC extends HTMLElement {
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
        font-family: "Poppins", sans-serif;
        font-size: 38px;
        font-weight: 700;
      }
      `;

      shadow.appendChild(style);

      var div = document.createElement("div");
      div.classList.add("root");
      div.textContent = textoOriginal;
      shadow.appendChild(div);
    }
  }

  customElements.define("subtitle-wc", subtitleWC);
}
