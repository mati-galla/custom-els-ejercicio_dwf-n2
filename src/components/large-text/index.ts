export function init() {
  class largeTextWC extends HTMLElement {
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
        width: 275px;
        margin: auto;
        padding: 30px 0;
        font-family: "Poppins", sans-serif;
        font-size: 22px;
        font-weight: 500;
      }
      
      @media only screen and (min-width:600px) {
        .root {
          width: 470px;
        }
      }
      `;
      shadow.appendChild(style);

      var p = document.createElement("p");
      p.classList.add("root");
      p.textContent = textoOriginal;
      shadow.appendChild(p);
    }
  }

  customElements.define("large-text-wc", largeTextWC);
}
