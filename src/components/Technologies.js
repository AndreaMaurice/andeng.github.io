import { IconContext } from "react-icons";
import { FaReact } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { DiPhp } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { TbBrandFigma } from "react-icons/tb";
import { CgFigma } from "react-icons/cg";

const Technologies = () => {
  return (
    <div
      className="h-full sm:w-auto mt-10 sm:mx-48 text-slate-900 flex flex-col place-content-center"
      id="tech"
    >
      <div className="text-slate-900 sm:text-5xl text-2xl font-bold flex justify-center sm:mt-20">
        <h3>
          Skills <span className="text-orange-500">&</span> Technologies
        </h3>
      </div>
      <div className="flex flex-wrap sm:pt-20 pt-5 place-content-center h-auto">
        <div className="w-15 h-10 sm:w-36 sm:h-36 m-4 hover:scale-110 transition duration-300 ease-in-out text-center">
          ReactJS
          <IconContext.Provider
            value={{
              className:
                "text-slate-900 hover:text-orange-500 w-10 h-11 mx-auto",
            }}
          >
            <div>
              <FaReact />
            </div>
          </IconContext.Provider>
        </div>
        <div className="w-15 h-10 sm:w-36 sm:h-36 m-4 group hover:scale-110 transition duration-300 ease-in-out text-center">
          React Native
          <IconContext.Provider
            value={{
              className:
                "text-slate-900 hover:text-orange-500 w-10 h-11 mx-auto",
            }}
          >
            <div>
              <FaReact />
            </div>
          </IconContext.Provider>
        </div>
        <div className="w-15 h-10 sm:w-36 sm:h-36 m-4 hover:scale-110 transition duration-300 ease-in-out text-center">
          Javascript
          <IconContext.Provider
            value={{
              className:
                "text-slate-900 hover:text-orange-500 w-10 h-11 mx-auto",
            }}
          >
            <div>
              <SiJavascript />
            </div>
          </IconContext.Provider>
        </div>
        <div className="w-15 h-10 sm:w-36 sm:h-36 m-4 hover:scale-110 transition duration-300 ease-in-out text-center">
          Laravel
          <IconContext.Provider
            value={{
              className:
                "text-slate-900 hover:text-orange-500 w-10 h-11 mx-auto",
            }}
          >
            <div>
              <FaLaravel />
            </div>
          </IconContext.Provider>
        </div>
        <div className="w-15 h-10 sm:w-36 sm:h-36 m-4 hover:scale-110 transition duration-300 ease-in-out text-center">
          PHP
          <IconContext.Provider
            value={{
              className:
                "text-slate-900 hover:text-orange-500 w-10 h-11 mx-auto",
            }}
          >
            <div>
              <DiPhp />
            </div>
          </IconContext.Provider>
        </div>
        <div className="w-15 h-10 sm:w-36 sm:h-36 m-4 hover:scale-110 transition duration-300 ease-in-out text-center">
          Prototyping
          <IconContext.Provider
            value={{
              className:
                "text-slate-900 hover:text-orange-500 w-10 h-11 mx-auto",
            }}
          >
            <div>
              <CgFigma />
            </div>
          </IconContext.Provider>
        </div>
        <div className="w-15 h-10 sm:w-36 sm:h-36 m-4 hover:scale-110 transition duration-300 ease-in-out text-center">
          MySQL
          <IconContext.Provider
            value={{
              className:
                "text-slate-900 hover:text-orange-500 w-10 h-11 mx-auto",
            }}
          >
            <div>
              <GrMysql />
            </div>
          </IconContext.Provider>
        </div>
        <div className="w-15 h-10 sm:w-36 sm:h-36 m-4 hover:scale-110 transition duration-300 ease-in-out text-center">
          Firebase
          <IconContext.Provider
            value={{
              className:
                "text-slate-900 hover:text-orange-500 w-10 h-11 mx-auto",
            }}
          >
            <div>
              <SiFirebase />
            </div>
          </IconContext.Provider>
        </div>
        <div className="w-15 h-10 sm:w-36 sm:h-36 m-4 hover:scale-110 transition duration-300 ease-in-out text-center">
          Git & Github
          <IconContext.Provider
            value={{
              className:
                "text-slate-900 hover:text-orange-500 w-10 h-11 mx-auto",
            }}
          >
            <div>
              <BsGithub />
            </div>
          </IconContext.Provider>
        </div>
        <div className="w-15 h-10 sm:w-36 sm:h-36 m-4 hover:scale-110 transition duration-300 ease-in-out text-center">
          HTML
          <IconContext.Provider
            value={{
              className:
                "text-slate-900 hover:text-orange-500 w-10 h-11 mx-auto",
            }}
          >
            <div>
              <DiHtml5 />
            </div>
          </IconContext.Provider>
        </div>
        <div className="w-15 h-10 sm:w-36 sm:h-36 m-4 hover:scale-110 transition duration-300 ease-in-out text-center">
          CSS
          <IconContext.Provider
            value={{
              className:
                "text-slate-900 hover:text-orange-500 w-10 h-11 mx-auto",
            }}
          >
            <div>
              <DiCss3 />
            </div>
          </IconContext.Provider>
        </div>
        <div className="w-15 h-10 sm:w-36 sm:h-36 m-4 hover:scale-110 transition duration-300 ease-in-out text-center">
          UI Design
          <IconContext.Provider
            value={{
              className:
                "text-slate-900 hover:text-orange-500 w-10 h-11 mx-auto",
            }}
          >
            <div>
              <TbBrandFigma />
            </div>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
