import estilo from "../estilo-predeterminado";
import "./custom/form.css";
import "./custom/animations.css";
import "./custom/gradientAnimation.css";
import { useForm } from "./hooks/useForm";
import Loader from "./Loader";
import { error, rocket } from "../assets";
import Separador from "./Separador";

const initialForm = {
  name: "",
  lastname: "",
  email: "",
  subject: "",
  comments: "",
};

const validationsForm = (form) => {
  let errors = {};
  let regularName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regularEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regularComments = /^.{1,255}$/;

  if (!form.name.trim()) {
    errors.name = "El nombre es obligatorio.";
  } else if (!regularName.test(form.name.trim())) {
    errors.name = "Utiliza únicamente letras.";
  }

  if (!form.lastname.trim()) {
    errors.lastname = "El apellido es obligatorio.";
  } else if (!regularName.test(form.lastname.trim())) {
    errors.lastname = "Utiliza únicamente letras.";
  }

  if (!form.email.trim()) {
    errors.email = "El correo es obligatorio.";
  } else if (!regularEmail.test(form.email.trim())) {
    errors.email = "Correo incorrecto.";
  }

  if (!form.subject.trim()) {
    errors.subject = "El asunto es obligatorio.";
  }

  if (!form.comments.trim()) {
    errors.comments = "El mensaje es obligatorio.";
  } else if (!regularComments.test(form.comments.trim())) {
    errors.comments = "Máximo de 255 caracteres.";
  }

  return errors;
};

const Contacto = () => {
  const { form, errors, loading, res, handleChange, handleBlur, handleSubmit } =
    useForm(initialForm, validationsForm);

  return (
    <>
      {loading && <Loader />}
      <section id="contact" className="h-[100%] py-[5rem] ">
        <Separador
          numero="4"
          firstcolor="from-[#FE5B49]"
          secondcolor="to-[#F9C629]"
          bgcolor="bg-[#0381EF]"
        />

        {/* Titles head */}
        <div className={`${estilo.flexCentrado} flex-col mb-[5rem]`}>
          <span
            className="bg-clip-text text-transparent bg-gradient-to-r from-[#FE5B49] 
          to-[#F9C629] text-[2rem] tracking-[-.05rem] font-[700] font-inter"
          >
            Contacto
          </span>
          <div className="px-[2rem]">
            <h4 className="heading mb-[1rem] text-[3.75rem] ss:text-[2.5rem]">
              Discutamos un proyecto
            </h4>
            <p className={estilo.parrafoMd}>
              Atento a la escucha de tus necesidades para poder brindarte un
              punto de vista que concluya en el fin de obtener lo mejor para tu
              proyecto.
            </p>
          </div>
        </div>
        {/* End titles head */}

        {/* Grid Form */}
        <div className="grid grid-cols-2 md:grid-cols-1 md:px-[2rem] px-[5rem] gap-[0rem]">
          <div className="relative">
            <div className="container gm:mb-[4rem]">
              <div className="content">
                <form onSubmit={handleSubmit}>
                  <div className="user-details">
                    <div className="input-box">
                      <span className="details">Nombre</span>
                      <input
                        type="text"
                        name="name"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={form.name}
                        required
                      />
                      {errors.name && (
                        <div className="flex aling-center mt-[.5rem]">
                          <img
                            src={error}
                            alt="Error"
                            className="mr-[.5rem] w-[20px]"
                          />
                          <span className="text-[#f55] whitespace-nowrap">
                            {errors.name}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="input-box">
                      <span className="details">Apellido</span>
                      <input
                        type="text"
                        name="lastname"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={form.lastname}
                        required
                      />
                      {errors.lastname && (
                        <div className="flex aling-center mt-[.5rem]">
                          <img
                            src={error}
                            alt="Error"
                            className="mr-[.5rem] w-[20px]"
                          />
                          <span className="text-[#f55] whitespace-nowrap">
                            {errors.lastname}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="input-box">
                      <span className="details">Email</span>
                      <input
                        type="email"
                        name="email"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={form.email}
                        required
                      />
                      {errors.email && (
                        <div className="flex aling-center mt-[.5rem]">
                          <img
                            src={error}
                            alt="Error"
                            className="mr-[.5rem] w-[20px]"
                          />
                          <span className="text-[#f55] whitespace-nowrap">
                            {errors.email}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="input-box">
                      <span className="details">Asunto</span>
                      <input
                        type="text"
                        name="subject"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={form.subject}
                        required
                      />
                      {errors.subject && (
                        <div className="flex aling-center mt-[.5rem]">
                          <img
                            src={error}
                            alt="Error"
                            className="mr-[.5rem] w-[20px]"
                          />
                          <span className="text-[#f55] whitespace-nowrap">
                            {errors.subject}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="input-box">
                    <span className="details">Comentario</span>
                    <textarea
                      name="comments"
                      cols="50"
                      rows="5"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={form.comments}
                      required
                      className="area resize-none w-[100%]
                  border-[#292929] border-[1px] p-[1rem] mb-[1.5rem]
                  bg-[#080b0e] text-[#fff]"
                    ></textarea>
                    {errors.comments && (
                      <div className="flex aling-center mt-[.5rem] mb-[1.5rem]">
                        <img
                          src={error}
                          alt="Error"
                          className="mr-[.5rem] w-[20px]"
                        />
                        <span className="text-[#f55] whitespace-nowrap">
                          {errors.comments}
                        </span>
                      </div>
                    )}
                  </div>
                  {res && (
                    <span className="font-inter text-[#60ff70]">
                      Procesado con éxito.
                    </span>
                  )}
                  <div className="mt-[1rem]">
                    <input
                      type="submit"
                      value="Enviar"
                      className="trans text-[#fff]
                px-[2rem] py-[.5rem] rounded-[.5rem] cursor-pointer
               hover:border-[#fff] border-[#ff968a] border-[1px]
                font-inter font-[500]"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="">
            <div className="flex flex-col items-center">
              {/* Animacion gradiente */}
              <div className="mb-[.5rem] mt-[1rem]">
                <h1 className="bout-title-2">
                  <span
                    className='bout-span-2 [--content-2:"Dinámico"]
          [--start-color:#ffcfc3] [--end-color:#F9BC2C]
          [--delay-2:0s] uppercase'
                  >
                    Dinámico
                  </span>

                  <span
                    className='bout-span-2 [--content-2:"Eficiente"]
          [--start-color:#ffcfc3] [--end-color:#F9BC2C]
          [--delay-2:3.33s] uppercase'
                  >
                    Eficiente
                  </span>

                  <span
                    className='bout-span-2 [--content-2:"Rápido"]
          [--end-color:#F9BC2C] [--start-color:#ffcfc3]
          [--delay-2:6.66s] uppercase'
                  >
                    Rápido
                  </span>
                </h1>
              </div>
              {/* END Animacion gradiente */}

              <div className="mt-[2rem]">
                <img
                  src={rocket}
                  className="w-[100px] keyframe-rocket"
                  alt="cohete"
                />
              </div>
            </div>
          </div>
        </div>

        {/* END Grid Form */}
      </section>
    </>
  );
};

export default Contacto;
