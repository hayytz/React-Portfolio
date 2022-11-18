import estilo from "../estilo-predeterminado";
import Separador from "./Separador";
import Boton from "./Boton";
import { projects } from "../constants";

const Proyectos = () => {
  return (
    <section id="projects" className="h-[100%] mb-[5rem]">
      <Separador
        firstcolor="from-[#8F22BE]"
        secondcolor="to-[#F40487]"
        bgcolor="bg-[#d4df00]"
        numero="3"
      />
      <div className={`${estilo.flexCentrado}`}>
        <span
          className="bg-clip-text text-transparent bg-gradient-to-r from-[#8F22BE] to-[#F40487]
        text-[2rem] tracking-[-.05rem] font-[700] font-inter mb-[1rem]"
        >
          Proyectos
        </span>
      </div>

      <div className={`${estilo.flexCentrado} flex-col mb-[3rem]`}>
        <h4 className="heading text-[3.75rem] ss:text-[2.5rem] mb-[1rem]">Dosier de trabajos</h4>
        <p className={`${estilo.parrafoMd}`}>Recopilación de proyectos.</p>
      </div>

      <div
        className="grid
      gg:grid-cols-2 
      sm:grid-cols-1
      sm:px-[2rem]
      grid-cols-3
       px-[5rem]
       gap-[1rem] "
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-[#161b22] relative w-[100%] h-[100%] border-[1px]
            border-[#282828] px-[2rem] py-[2rem] rounded-[1rem] shadow-md
            flex justify-center items-center flex-col overflow-hidden"
          >
            <div className="flex justify-center items-center gap-[.2rem] mb-[2rem]">
              <span className="text-[#fff] text-[15px]">Estado:</span>
              <span className="text-[15px] text-[#8b949e]">
                {" "}
                {project.estado}
              </span>
              <img src={project.icon} className="w-[20px] h-[20px]" />
            </div>
            <div className="mb-[2rem] flex flex-col items-center justify-center">
              <h5
                className="text-[24px] text-[#fff] max-w-[400px]
              font-space font-[500] text-center"
              >
                {project.titulo}
              </h5>
              <p
                className="font-space font-[400] leading-[1.6]
              tracking-[-.2px] max-w-[500px] text-[20px] text-[#8b949e]
              text-center "
              >
                {project.contenido}
              </p>
            </div>
            {project.estado === "Finalizado" ? (
              <Boton
                link={project.siteLink}
                border="border-[#a375b5]"
                text="Visitar"
              />
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Proyectos;
