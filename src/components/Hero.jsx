import React from "react";
import estilo from "../estilo-predeterminado";
import Button from "./Button";
import HeroScene from "./HeroScene";

const Hero = () => {
  return (
    <section className="h-[100vh] w-[100vw] bg-hero">
      <div className={`${estilo.flexCentrado} flex-col`}>
        <div className="flex mt-[10rem] absolute inset-0  mix-blend-exclusion flex-col z-[10]">
          <h1
            className="font-inter
            text-[66px] font-[600] text-center leading-[1]
             text-[#fff]
            ">
            FRONT EN <br />
          </h1>
          <span className="text-[25px] self-center text-[#fff]">WEB DEVELOPER</span>
        </div>

        <div className="absolute inset-0 z-[5]">
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
