import './custom/darkbutton.css';
import {cv } from '../assets';

const DarkButton = (props) => {
    return (
      <a href={cv} download >
        <span className={`${props.borderHover} dark-button trans`}>
          <span className="dark-button-background"></span>
          <span className={`${props.background} dark-button-text text-[#666] font-[500] 
        text-[15px] font-space hover:text-[#9b9a9a] trans`}>CV Descarga</span>
        </span>
      </a>
  
    )
  }
  
  export default DarkButton