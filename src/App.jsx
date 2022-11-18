import React from "react";
import {
  Navbar,
  Hero,
  About,
  Progreso,
  Proyectos,
  Contacto,
  Footer,
} from "./components";
import estilo from "./estilo-predeterminado";

const App = () => {
  return (
    <>
      <Navbar />
      <div className={estilo.contenedorAncho}>
        <Hero />
      </div>

      <div className={estilo.flexCentrado}>
        <div className={estilo.contenedorAncho}>
          <About />
          <Progreso />
          <Proyectos />
          <Contacto />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
