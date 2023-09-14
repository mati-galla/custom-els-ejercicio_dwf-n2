export function init() {
  class bodyWC extends HTMLElement {
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
        margin: 0;
        font-family: "Poppins", sans-serif;
        font-size: 18px;
        font-weight: 400;
      }    
      `;
      shadow.appendChild(style);

      var p = document.createElement("p");
      p.classList.add("root");
      p.textContent = textoOriginal;
      shadow.appendChild(p);
    }
  }

  customElements.define("body-wc", bodyWC);
}
