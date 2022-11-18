import estilo from "../estilo-predeterminado";
import Separador from "./Separador";
import Editor from "./Editor";
import { flag, pin, tool, next, nodejs, ts, graphql } from '../assets';

const Progreso = () => {
  return (
    <section id="progress" className="h-[100%] mb-[5rem] bg-[#0d1116]">
      <Separador numero="2" firstcolor="from-[#0381EF]" secondcolor="to-[#00DAD9]" bgcolor="bg-[#0381EF]" />

      <div className={`${estilo.flexCentrado} flex-col mb-[5rem]`}>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#007CF0] to-[#00DFD8]
        text-[2rem] tracking-[-.05rem] font-[700] font-inter mb-[1rem]">Progreso</span>
        <div className="px-[2rem]">
          <h4 className="heading mb-[1rem] text-[3.75rem] ss:text-[2.5rem]">Camino autodidacta</h4>
          <p className={estilo.parrafoMd}>Recorrido de las tecnologías empleadas y aprendidas en el tiempo de mi trayectoria.</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-1
       md:px-[2rem] px-[5.5rem]">

        {/* Grid col 1 */}
        <Editor />
        {/* Grid END col 1 */}


        {/* Grid col 2 */}
        <div className="flex flex-col md:px-0 px-[2rem]" >
          <div className="mb-[3rem]">
            <div className="md:flex md:flex-col md:items-center">
            <img src={flag} alt="bandera-meta-logro" className={`${estilo.iconos} mb-[1rem]`} />
              <h5 className={`${`${estilo.titulosDeParrafo} md:text-center`} md:text-center`}>Comienzo del aprendizaje</h5>
              <p className={`${estilo.parrafoSm} md:text-center`}>Html y CSS. Manejo del DOM con
                JavaScript y conocimiento básico de ajax. </p>
            </div>
          </div>

          <div className="mb-[3rem]">
            <div className="md:flex md:flex-col md:items-center">
            <img src={tool} alt="bandera-meta-logro" className={`${estilo.iconos} mb-[1rem]`} />
              <h5 className={`${estilo.titulosDeParrafo} md:text-center`}>Mediados del roadmap</h5>
              <p className={`${estilo.parrafoSm} md:text-center`}>Implemetación de backend utilizando
                php y realización de peticiones sql. El resultante fue un blog de noticias.</p>
            </div>
          </div>

          <div className="mb-[3rem]">
            <div className="md:flex md:flex-col md:items-center">
            <img src={pin} alt="bandera-meta-logro" className={`${estilo.iconos} mb-[1rem]`} />
              <h5 className={`${estilo.titulosDeParrafo} md:text-center`}>Actualidad</h5>
              <p className={`${estilo.parrafoSm} md:text-center`}>Empiezo del trayecto con React y Tailwindcss. Aprender un framework de React como consiguiente.</p>
            </div>
          </div>

        </div>
        {/* Grid END col 2 */}
      </div>

      <div className={`${estilo.flexCentrado} mt-[5rem]`}>
        <div className={`${estilo.flexCentrado} flex-col`}>
          <small className="text-[0.85rem] text-[#8b949e] tracking-[0.2rem]
          text-center uppercase font-[700] font-inter mb-[2rem]">Futuros intereses</small>

          <div className="flex gap-8 w-full h-[100%] intereses-container">
              <img src={next} alt="nextjs" className={`${estilo.logos} intereses`} />
              <img src={nodejs} alt="nodejs" className={`${estilo.logos} intereses`} />
              <img src={ts} alt="typescript" className={`${estilo.logos} intereses`} />
              <img src={graphql} alt="graphql" className={`${estilo.logos} intereses`} />
          </div>
        </div>
      </div>
    </section >


  )
}

export default Progreso