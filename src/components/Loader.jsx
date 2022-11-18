import "./custom/load.css";

function Loader() {
  return (
    <div className="relative w-[100%] h-[100%] z-[100]">
      <div
        className="fixed w-[100%] h-[100%] top-[50%] left-[50%]
        translate-y-[-50%] translate-x-[-50%]"
      >
        <div
          className="flex justify-center items-center
         w-[100%] h-[100%] bg-[#14182561] backdrop-blur-[1.5rem]"
        >
          <div className="loader"></div>
          {/* #1d2632 */}
          
        </div>
      </div>
    </div>
  );
}

export default Loader;
