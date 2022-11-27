import React from "react";
import estilo from "../estilo-predeterminado";
import Button from "./Button";
import HeroScene from "./HeroScene";

const Hero = () => {
  return (
    <section className="h-full w-full bg-black">
      <div className={`${estilo.flexCentrado} flex-col h-[100vh]`}>
        <div className="flex mt-[10rem] absolute inset-0  mix-blend-exclusion flex-col z-[10]">
          <h1
            className="font-inter
            text-[66px] font-[600] text-center leading-[1]
             text-[#fff]
            "
          >
            FRONT END <br />
          </h1>
          <span className="text-[25px] self-center text-[#fff]">
            WEB DEVELOPER
          </span>
        </div>
        <div className="absolute inset-0 z-[0]">
          <HeroScene />
        </div>
        <div className="absolute bottom-[80px] z-[10]">
          <Button />
        </div>
      </div>
    </section>

    // </section>
  );
};

export default Hero;
