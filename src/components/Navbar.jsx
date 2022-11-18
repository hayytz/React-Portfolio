import { useState } from "react";
import { navLinks } from "../constants";
import { navSecondLinks } from "../constants";
import DarkButton from "./DarkButton";
import { menu, close } from "../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [navColor, setNavColor] = useState(false);

  const changebg = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changebg);

  const changeColorBG = () => {
    if (window.scrollY > 800) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  };
  window.addEventListener("scroll", changeColorBG);

  return (
    <header
      className={`${navbar ? "active-navbar" : ""} 
        flex justify-between items-center
        pt-[10px] pb-[10px] pl-[4.5%] pr-[4.5%] bg-transparent fixed right-0 left-0 z-[100]
        w-[100%] trans ${navColor ? "active-navbar-scroll" : ""}
        backdrop-blur-[5px]`}
    >
      <a href="#">
        <h1 className="text-[1.2rem] font-[400] font-inter text-[#fff]">
          Ricardo
          <span className="text-[#666]"> Guevara</span>
        </h1>
      </a>
      <nav className="ml-[6rem] mdd:hidden ">
        <ul>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className="font-[400] font-inter
                        inline-block ml-[12px] p-[8px]
                         text-[#666] text-[.875rem]
                        trans hover:text-[#fff]"
            >
              <a href={nav.id}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </nav>
      <ul className="mdd:hidden mt-[.5rem] flex items-center ">
        {navSecondLinks.map((secondNav) => (
          <li
            key={secondNav.id}
            className="inline-block 
                     p-[0px] mr-[15px] text-[.875rem] text-[#666]
                     font-[400] hover:text-[#fff] trans"
          >
            <a href={secondNav.linkSite} target="_blank">
              {secondNav.title}
            </a>
          </li>
        ))}
        <DarkButton
          background={`${
            navColor ? "dark-button-bg-text-blue" : "dark-button-bg-text"
          }`}
          borderHover={`${
            navColor ? "dark-button-hv-change" : "dark-button-hv"
          }`}
        />
      </ul>
      {/* Responsive menu */}
      <div className="hidden mdd:flex items-center justify-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          onClick={() => setToggle((prev) => !prev)}
          className="cursor-pointer z-[50]"
        />
        <div
          className={`fixed ${toggle ? "flex" : "hidden"}
        bg-[#000000d7] w-[100vw] h-[100vh] left-0 top-0 justify-center 
        items-center sidebar`}
        >
          <ul>
            {navLinks.map((movilNav) => (
              <li
                key={movilNav.id}
                className="text-[#fff]
                font-inter text-center text-[1.3rem]
                hover:text-[#a8a8a8] hover:line-through trans mb-[1rem]"
              >
                <a href={movilNav.id}>{movilNav.title}</a>
              </li>
            ))}
            <DarkButton
              background={`
             dark-button-bg-text
          `}
              borderHover={`
                dark-button-hv
              `}
            />
          </ul>
        </div>
      </div>
      {/* END Responsive menu */}
    </header>
  );
};

export default Navbar;
