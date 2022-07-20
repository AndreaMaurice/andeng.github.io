import Omega from "../assets/Omega.png";
import Portfolio from "../assets/Portfolio.png";
import Aim from "../assets/Aim.png";

const Projects = () => {
  return (
    <div className="h-full w-auto mx-48 grid grid-cols-1 place-content-center text-slate-400">
      <div>
        <p className="text-5xl font-bold text-rose-500 leading-loose pb-10">
          Things I've Built
        </p>
      </div>
      <div className="grid grid-cols-2 gap-10">
        <div>
          <img
            src={Aim}
            alt="Association of ICT Majors Website"
            width={750}
            className="place-self-center drop-shadow-2xl"
          />
          <p>Title</p>
          <p>Descriptions</p>
        </div>
        <div>
          <img
            src={Portfolio}
            alt="Portfolio Website"
            width={750}
            className="place-self-center drop-shadow-2xl"
          />
          <p>Title</p>
          <p>Descriptions</p>
        </div>
        <div>
          <img
            src={Omega}
            alt="Omega Digi Bible Website"
            width={750}
            className="place-self-center drop-shadow-2xl"
          />
          <p>Title</p>
          <p>Descriptions</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
