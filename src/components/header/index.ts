export function init() {
  class headerWC extends HTMLElement {
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
        height: 60px;
        background: #FF8282;
        font-size: 22px;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      
      @media only screen and (min-width: 600px) {
        .root {
          height: 80px;
        }
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

  customElements.define("header-wc", headerWC);
}
