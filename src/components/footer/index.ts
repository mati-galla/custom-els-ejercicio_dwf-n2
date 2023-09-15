export function init() {
  class FooterWC extends HTMLElement {
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
        height: 233px;
        background: #ffa0ea;
        font-size: 22px;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }      

      .root p {
        margin: 0;
        text-align: center;
      }
      `;
      shadow.appendChild(style);

      var div = document.createElement("div");
      div.classList.add("root");

      var p = document.createElement("p");
      p.textContent = textoOriginal;
      div.appendChild(p);

      shadow.appendChild(div);
    }
  }

  customElements.define("footer-wc", FooterWC);
}
