import estilo from "../estilo-predeterminado";
import Separador from "./Separador";

const About = () => {
  return (
    <section id="about" className="general-bg h-[100%] mb-[7rem]">
      <Separador
        firstcolor="from-[#6F6F6F]"
        secondcolor="to-[#000]"
        bgcolor="bg-[#000]"
        numero="1"
      />

      <div className="mb-[.5rem] mt-[4rem]">
        <h1 className="bout-title">
          <span
            className='bout-span [--content:"Acerca"]
          [--start-color:#000] [--end-color:#bdbdbd]
          [--delay:0s]'
          >
            Acerca
          </span>

          <span
            className='bout-span [--content:"De"]
          [--start-color:#bdbdbd] [--end-color:#000]
          [--delay:3.33s]'
          >
            De
          </span>

          <span
            className='bout-span [--content:"Mi"]
          [--end-color:#000] [--start-color:#bdbdbd]
          [--delay:6.66s]'
          >
            Mi
          </span>
        </h1>
      </div>

      <div
        className="flex flex-col justify-center items-center
      mb-[5rem] px-[2rem]"
      >
        <p className={`${estilo.parrafoMd} mt-[1.5rem]`}>
          Actualmente con diecisiete años de edad y una trayectoria de ocho
          meses de aprendizaje. Amante de la tecnología, con pasión hacia la
          música y el arte. Guitarrista y lector de pasatiempo.
        </p>
      </div>

      <div className="grid place-content-center grid-cols-2 sm:px-[2rem] sm:grid-cols-1 px-[5rem]">
        <div
          className="flex flex-col justify-center items-center
        border-[#424242] border-[1px]"
        >
          <div className="outer yosemite">
            <div className="dot red"></div>
            <div className="dot amber"></div>
            <div className="dot green"></div>
          </div>

          <div
            className={`bg-[#161b22]
          shadow-xl w-[100%] h-[100%] ${estilo.flexStart}
          px-[1.5rem] py-[1rem] flex-col`}
          >
            <h3 className={`${estilo.titulosDeParrafo}`}>Fortalezas</h3>
            <p className={`text-left ${estilo.parrafoSm}`}>
              Asiduo en el aprendizaje y con fortalezas autodidactas para la
              eficiencia del desarrollo personal y profesional.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div
            className={`
           w-[100%] h-[100%] ${estilo.flexStart}
          px-[1.5rem] py-[1.5rem] flex-col`}
          >
            <h3 className={`${estilo.titulosDeParrafo}`}>Logros</h3>
            <p className={`text-left ${estilo.parrafoSm}`}>
              Ganador del primer lugar en feria tecnológica basado en un
              proyecto de células con
              <span className="text-yellow-500 font-[700]"> JavaScript</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
