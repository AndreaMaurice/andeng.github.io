import Omega from "../assets/Omega.png";
import Portfolio from "../assets/Portfolio.png";
import Aim from "../assets/Aim.png";

const Projects = () => {
  return (
    <div className="h-full w-auto mx-48 grid grid-cols-1 place-content-center text-slate-400">
      <div>
        <p className="text-5xl font-bold text-rose-500 leading-loose">
          Things I've Built
        </p>
        <p className="text-3xl font-bold pb-10 text-center">Websites</p>
      </div>
      <div className="grid grid-cols-3 gap-10">
        <div>
        <a href={"https://lvcc-aim.netlify.app"} target="_blank" rel="noopener noreferrer">
          <img
            src={Aim}
            alt="Association of ICT Majors Website"
            width={500}
            className="place-self-center drop-shadow-2xl"
          />
          <p className="font-bold pt-2">Association of ICT Majors Website</p>
          </a>
          <p>Created with HTML, CSS, and JS</p>
        </div>
        <div>
        <a href={"https://lvcc-aim.netlify.app"} target="_blank" rel="noopener noreferrer">
          <img
            src={Portfolio}
            alt="Portfolio Website"
            width={500}
            className="place-self-center drop-shadow-2xl"
          />
          <p className="font-bold pt-2">Portfolio Website</p>
          </a>
          <p>Created with ReactJS and TailwindCSS</p>
        </div>
        <div>
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
        </div>
      </div>
      <div>
        <p className="text-3xl font-bold pt-20 pb-10 text-center">Prototypes</p>
      </div>
      <div className="grid grid-cols-3 gap-10">
        <div>
        <a href={"https://lvcc-aim.netlify.app"} target="_blank" rel="noopener noreferrer">
          <img
            src={Aim}
            alt="Association of ICT Majors Website"
            width={500}
            className="place-self-center drop-shadow-2xl"
          />
          <p className="font-bold pt-2">Association of ICT Majors Website</p>
          </a>
          <p>Created with HTML, CSS, and JS</p>
        </div>
        <div>
        <a href={"https://lvcc-aim.netlify.app"} target="_blank" rel="noopener noreferrer">
          <img
            src={Portfolio}
            alt="Portfolio Website"
            width={500}
            className="place-self-center drop-shadow-2xl"
          />
          <p className="font-bold pt-2">Portfolio Website</p>
          </a>
          <p>Created with ReactJS and TailwindCSS</p>
        </div>
        <div>
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
        </div>
      </div>
    </div>
  );
};

export default Projects;
