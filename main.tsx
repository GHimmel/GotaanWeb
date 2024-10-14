import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
/*
const shadow = this.attachShadow({ mode: "open" });

// Crear y adjuntar el enlace al CSS dentro del Shadow DOM
const link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href = "https://cdn.jsdelivr.net/gh/GHimmel/GotaanWeb@main/estilosV6.css"; // Asegúrate de que el enlace sea correcto
shadow.appendChild(link);

// Crear el contenedor raíz para React dentro del Shadow DOM
const rootElement = document.createElement("div");
rootElement.id = "gotaan";
shadow.appendChild(rootElement);

createRoot(document.getElementById("gotaan")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
 */

// Define el Web Component
class GotaanComponent extends HTMLElement {
  constructor() {
    super();

    // Crea el Shadow DOM
    const shadow = this.attachShadow({ mode: "open" });

    // Añade un contenedor para el componente React
    const rootElement = document.createElement("div");
    rootElement.id = "gotaan-root";
    shadow.appendChild(rootElement);

    // Añade los estilos al Shadow DOM
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href =
      "https://cdn.jsdelivr.net/gh/GHimmel/GotaanWeb@main/estilosV8.css"; // Ruta del CSS
    shadow.appendChild(link);

    // Renderiza el componente React en el Shadow DOM
    createRoot(rootElement).render(
      <StrictMode>
        <App />
      </StrictMode>
    );
  }
}

// Define el custom element
customElements.define("gotaan-component", GotaanComponent);

// Instancia el componente en el documento automáticamente
document.addEventListener("DOMContentLoaded", () => {
  console.log("Cargando script");
  const gotaanComponent = document.createElement("gotaan-component");
  document.body.appendChild(gotaanComponent);
});
