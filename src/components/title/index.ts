export function init() {
  class TitleWC extends HTMLElement {
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
        font-size: 52px;
        font-weight: 700;
      }    
      `;
      shadow.appendChild(style);

      var p = document.createElement("p");
      p.classList.add("root");
      p.textContent = textoOriginal;
      shadow.appendChild(p);
    }
  }

  customElements.define("title-wc", TitleWC);
}
