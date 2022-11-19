import React, { useState, useEffect } from "react";
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
  const [loading, setLoading] = useState(false);
  const spinner = document.getElementById("spinner");

  useEffect(() =>{
    window.onload = () =>{
      setLoading(true)
    }
    if(!loading){
      spinner.style.display="none";
    }
     
  }, [loading])

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
    )
};

export default App;
