import { useState, useRef, useMemo, useEffect } from "react";

function Editor() {
  const targetRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const callbackFunction = (entries) => {
    const [entry] = entries;

    setVisible(entry.isIntersecting);
  };

  const options = useMemo(() => {
    return {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    const currentTarget = targetRef.current;

    if (currentTarget) observer.observe(currentTarget);

    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, [targetRef, options]);

  return (
    <div
      ref={targetRef}
      className={`shadow-xl flex flex-col bg-[#171A1F] md:mb-[3rem]
    overflow-hidden `}
    >
      {/* Ventana de editor */}
      <div className="flex flex-row w-[100%] h-[30px] p-[.5rem]">
        <span
          className="w-[10px] h-[10px] bg-[#dadada]
            rounded-full mr-1 trans hover:bg-[#FF7068]"
        ></span>
        <span
          className="w-[10px] h-[10px] bg-[#dadada]
            rounded-full mr-1 trans hover:bg-[#FFC443]"
        ></span>
        <span
          className="w-[10px] h-[10px] bg-[#dadada]
            rounded-full trans hover:bg-[#3DCF53]"
        ></span>
        <div className="w-[100%] h-[100%] flex justify-center">
          <span className="text-[#d2d2d2] font-mono">Progreso.jsx</span>
        </div>
      </div>
      {/* Fin ventana de editor */}

      {/* Contenido del editor */}

      <div className="w-[100%] h-[100%] bg-[#23272E] p-[1rem]">
        <p
          className={`${visible ? "typewriter" : ""} whitespace-nowrap
            font-[600] text-[16px] font-mono w-[26ch] [--pasos:26]
            [--delay-typing:0s]`}
        >
          <span className="text-[#B771CD]">
            import
            <span className="text-[#DA6A73]"> React</span>
            <span> from</span>
            <span className="text-[#92BB75]"> 'react';</span>
          </span>
        </p>
        <br />

        <p
          className={`${visible ? "typewriter" : ""} whitespace-nowrap
            font-[600] text-[16px] font-mono w-[24ch] [--pasos:24]
            [--delay-typing:1s]`}
        >
          <span className="text-[#B771CD]">const</span>
          <span className="text-[#5FAAE8]"> Progreso = </span>
          <span className="text-[#CB9664]">() </span>
          <span className="text-[#CB9664]">{"=> "}</span>
          <span className="text-[#CB9664]">{"{"}</span>
        </p>

        <p
          className={`${visible ? "typewriter" : ""} whitespace-nowrap
            font-[600] text-[16px] font-mono w-[15ch] [--pasos:15]
            [--delay-typing:2s]`}
        >
          <span className="text-[#B771CD] ml-[1.3rem]">return </span>
          <span className="text-[#CB9664]">{"("}</span>
        </p>
        <p
          className={`${visible ? "typewriter" : ""} whitespace-nowrap
            font-[600] text-[16px] font-mono w-[24ch] [--pasos:24]
            [--delay-typing:2.5s]`}
        >
          <span className="text-[#989EAB] ml-[2.3rem]">{"<"}</span>
          <span className="text-[#DA6A73]">div</span>
          <span className="text-[#989EAB]">{">"}</span>
        </p>
        {/* Span Start */}

        <p
          className={`${visible ? "typewriter" : ""} whitespace-nowrap
            font-[600] text-[16px] font-mono w-[100ch] [--pasos:100]
            [--delay-typing:3s]`}
        >
          <span className="text-[#989EAB] ml-[3rem]">{"<"}</span>
          <span className="text-[#DA6A73]">span</span>
          <span className="text-[#989EAB]">{">"}</span>
          <br />
          <span className="text-[#989EAB] ml-[5rem]">html</span>
          <br />
          <span className="text-[#989EAB] ml-[5rem]">css</span>
          <br />
          <span className="text-[#989EAB] ml-[5rem]">javascript</span>
          <br />
          <span className="text-[#989EAB] ml-[5rem]">php</span>
          <br />
          <span className="text-[#989EAB] ml-[5rem]">React</span>
          <br />
          <span className="text-[#989EAB] ml-[5rem]">Tailwindcss</span>
          <br />

          <span className="text-[#989EAB] ml-[3rem]">{"<"}</span>
          <span className="text-[#DA6A73]">span</span>
          <span className="text-[#989EAB]">{">"}</span>
        </p>

        {/* Span END */}
        <p
          className={`${visible ? "typewriter" : ""} whitespace-nowrap
            font-[600] text-[16px] font-mono w-[15ch] [--pasos:15]
            [--delay-typing:3.1s]`}
        >
          <span className="text-[#989EAB] ml-[2.3rem]">{"</"}</span>
          <span className="text-[#DA6A73]">div</span>
          <span className="text-[#989EAB]">{">"}</span>
        </p>
        <p
          className={`${visible ? "typewriter" : ""} whitespace-nowrap
            font-[600] text-[16px] font-mono w-[10ch] [--pasos:5]
            [--delay-typing:3.4s]`}
        >
          <span className="text-[#CB9664] ml-[1rem]">{")"}</span>
        </p>
        <p
          className={`${visible ? "typewriter" : ""} whitespace-nowrap
            font-[600] text-[16px] font-mono w-[10ch] [--pasos:5]
            [--delay-typing:3.5s]`}
        >
          <span className="text-[#CB9664]">{"}"}</span>
        </p>
        <br />
        <p
          className={`${visible ? "typewriter" : ""} whitespace-nowrap
            font-[600] text-[16px] font-mono w-[24ch] [--pasos:24]
            [--delay-typing:3.6s]`}
        >
          <span className="text-[#B771CD]">export default </span>
          <span className="text-[#5FAAE8]">Progreso</span>
        </p>
      </div>
      {/* Fin contenido del editor */}
    </div>
  );
}

export default Editor;
