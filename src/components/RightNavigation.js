import { IconContext } from "react-icons";
import { TbSquareRotated } from "react-icons/tb";

const RightNavigation = () => {
  return (
    <div className="h-screen w-24 flex flex-col fixed float-right right-0">
      <div className="flex-1 border-l-4 border-rose-500 grid grid-cols-1 content-end">
        <div className="mx-auto" style={{ writingMode: "vertical-rl" }}>
          <a
            className="text-rose-500 hover:text-rose-300"
            href={"mailto:andreamauricedg@gmail.com"}
          >
            andreamauricedg@gmail.com
          </a>
        </div>
      </div>
      <div className="flex-1 space-y-5 grid grid-cols-1 content-center">
        <IconContext.Provider
          value={{
            className: "text-rose-500 w-5 h-5 mx-auto hover:text-rose-300",
          }}
        >
          <div className="relative group">
            <TbSquareRotated className="group-hover:invisible"/>
            <p className="absolute inset-0 z-10 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 duration-100 text-rose-500 font-semibold">
              Banner
            </p>
          </div>
        </IconContext.Provider>
        <IconContext.Provider
          value={{
            className:
              "text-rose-500 w-5 h-5 mx-auto hover:text-rose-300 relative",
          }}
        >
          <div className="relative group">
            <TbSquareRotated className="group-hover:invisible"/>
            <p className="absolute inset-0 z-10 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 duration-100 text-rose-500 font-semibold">
              About
            </p>
          </div>
        </IconContext.Provider>
        <IconContext.Provider
          value={{
            className: "text-rose-500 w-5 h-5 mx-auto hover:text-rose-300",
          }}
        >
          <div className="relative group">
            <TbSquareRotated className="group-hover:invisible"/>
            <p className="absolute inset-0 z-10 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 duration-100 text-rose-500 font-semibold">
              Tech
            </p>
          </div>
        </IconContext.Provider>
        <IconContext.Provider
          value={{
            className: "text-rose-500 w-5 h-5 mx-auto hover:text-rose-300",
          }}
        >
          <div className="relative group">
            <TbSquareRotated className="group-hover:invisible"/>
            <p className="absolute inset-0 z-10 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 duration-100 text-rose-500 font-semibold">
              Projects
            </p>
          </div>
        </IconContext.Provider>
        <IconContext.Provider
          value={{
            className: "text-rose-500 w-5 h-5 mx-auto hover:text-rose-300",
          }}
        >
          <div className="relative group">
            <TbSquareRotated className="group-hover:invisible"/>
            <p className="absolute inset-0 z-10 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 duration-100 text-rose-500 font-semibold">
              Contact
            </p>
          </div>
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default RightNavigation;


