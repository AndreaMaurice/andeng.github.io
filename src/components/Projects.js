import Omega from "../assets/Omega.png";
import Portfolio from "../assets/Portfolio.png";
import Aim from "../assets/Aim.png";
import Endur from "../assets/Endur.png";
import LVSAS from "../assets/LVSAS.png";

const Projects = () => {
  return (
    <div
      className="h-full sm:w-auto sm:mx-48 grid grid-cols-1 place-content-center gap-4 text-slate-900 mt-20 sm:pt-32"
      id="projects"
    >
      <div>
        <h3 className="sm:text-5xl text-2xl text-center font-bold text-slate-900 leading-loose">
          Things I've Built
        </h3>
        <h4 className="sm:text-3xl text-xl font-bold sm:pb-10 pt-5 text-center text-orange-500">
          Websites
        </h4>
      </div>
      {/* Website and Landing Pages */}
      <div className="grid sm:grid-cols-3 grid-auto-row auto-rows-max gap-10 text-center">
        <div>
          <a
            href={"https://lvcc-aim.netlify.app"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Aim}
              alt="Association of ICT Majors Website"
              width={500}
              className="place-self-center drop-shadow-sm"
            />
            <p className="font-bold pt-5 sm:pt-7">
              Association of ICT Majors Website
            </p>
          </a>
          <p>Created with HTML, CSS, and JS</p>
        </div>
        <div>
          <a
            href={"https://andreamaurice.vercel.app"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Portfolio}
              alt="Portfolio Website"
              width={500}
              className="place-self-center drop-shadow-sm"
            />
            <p className="font-bold pt-5 sm:pt-7">Portfolio Website</p>
          </a>
          <p>Created with ReactJS and TailwindCSS</p>
        </div>
        <div>
          <a
            href={"https://github.com/AndreaMaurice/omegawebsite-php"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Omega}
              alt="Omega Digi Bible Website"
              width={500}
              className="place-self-center drop-shadow-sm"
            />
            <p className="font-bold pt-5 sm:pt-7">Omega Digi Bible Website</p>
          </a>
          <p>Created with Vanilla PHP and MySQL</p>
        </div>
      </div>
      {/* Prototypes and Designs */}
      <div>
        <h4 className="sm:text-3xl text-xl font-bold sm:pt-20 pt-10 text-center text-orange-500">
          Prototypes
        </h4>
      </div>
      <div className="grid sm:grid-cols-3 grid-auto-row auto-rows-max gap-10 text-center">
        <div>
          <a
            href={
              "https://www.figma.com/proto/ZggwsX7zcBG57GB2wYaWfr/Prototype-LVSAS?node-id=648%3A2340&scaling=min-zoom&page-id=86%3A2&starting-point-node-id=648%3A2340&show-proto-sidebar=1"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={LVSAS}
              alt="LVCC Scholarship Application System Prototype"
              width={500}
              className="place-self-center drop-shadow-sm"
            />
            <p className="font-bold pt-5 sm:pt-7">
              LVCC Scholarship Application System Prototype
            </p>
          </a>
          <p>
            Capstone Project Prototype. A Scholarship Application System for
            LVCC Pampanga created with Figma Prototyping Tool
          </p>
        </div>
        <div>
          <a
            href={
              "https://www.figma.com/proto/inyVGjXLgVigLHtmlZV4Rb/MRC-Freelance-Website-2022?node-id=130%3A3&scaling=scale-down-width&page-id=130%3A2&starting-point-node-id=130%3A3"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Endur}
              alt="Endur Prototype"
              width={500}
              className="place-self-center drop-shadow-sm"
            />
            <p className="font-bold pt-5 sm:pt-7">Endur Prototype</p>
          </a>
          <p>A freelancing website created with Figma Prototyping Tool</p>
        </div>
        {/* <div>
        <a href={"https://lvcc-aim.netlify.app"} target="_blank" rel="noopener noreferrer">
          <img
            src={Omega}
            alt="Omega Digi Bible Website"
            width={500}
            className="place-self-center drop-shadow-2xl"
          />
          <p className="font-bold pt-2">Omega Digi Bible Website</p>
          </a>
          <p>Created with Vanilla PHP and MySQL</p>
        </div> */}
      </div>
    </div>
  );
};

export default Projects;
