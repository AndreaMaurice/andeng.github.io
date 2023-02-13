import React from "react";
import { IconContext } from "react-icons";
import { TbBrandGithub } from "react-icons/tb";
import { FiLinkedin } from "react-icons/fi";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="flex flex-col pb-5">
      <div className="flex flex-row collapse sm:invisible place-content-center text-center items-end space-x-5">
        <IconContext.Provider
          value={{
            className:
              "text-slate-500 w-10 h-11 mx-auto hover:text-orange-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 m-2",
          }}
        >
          <div>
            <a
              href={"https://github.com/AndreaMaurice"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <TbBrandGithub />
            </a>
          </div>
        </IconContext.Provider>
        <IconContext.Provider
          value={{
            className:
              "text-slate-500 w-9 h-9 mx-auto hover:text-orange-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 m-2",
          }}
        >
          <div>
            <a
              href={"https://www.linkedin.com/in/andrea-maurice-de-guzman47/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin />
            </a>
          </div>
        </IconContext.Provider>
        <IconContext.Provider
          value={{
            className:
              "text-slate-500 w-9 h-9 mx-auto hover:text-orange-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 m-2",
          }}
        >
          <div>
            <a
              href={"mailto:andreamauricedeguzman@gmail.com"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiMail />
            </a>
          </div>
        </IconContext.Provider>
      </div>
      <div className="text-center collapse sm:invisible">
        <a
          className="text-slate-900 hover:text-orange-600"
          href={"mailto:andreamauricedeguzman@gmail.com"}
        >
          andreamauricedeguzman@gmail.com
        </a>
      </div>
      <div className="text-center">
        <p>Created by me &#128518;</p>
      </div>
    </div>
  );
};

export default Footer;
