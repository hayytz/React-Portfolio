import { footerLinks } from "../constants";
import "./custom/animations.css";

function Footer() {
  return (
      <footer
        className="
   border-t-[#4b6475] border-t-[1px]"
      >
<div className="grid grid-cols-2 px-[3rem] py-[2rem] bg-[#0a0d11]">
        <div>
          <small
            className="text-[#fff] 
        text-[.85rem] font-[500] font-inter"
          >
            &copy; Ricardo Guevara
          </small>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-end gap-[2rem]">
            {footerLinks.map((logos) => (
              <a key={logos.id} href={logos.linkSite} target="_blank">
                <img
                  src={logos.logo}
                  className="cursor-pointer hover:opacity-[0.5] trans"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      </footer>
  );
}

export default Footer;
