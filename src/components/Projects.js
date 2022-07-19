import omega from "../assets/omega.png";
import portfolio from "../assets/portfolio.png";
import aim from "../assets/aim.png";

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
            src={aim}
            alt="Association of ICT Majors Website"
            width={750}
            className="place-self-center drop-shadow-2xl"
          />
          <p>Title</p>
          <p>Descriptions</p>
        </div>
        <div>
          <img
            src={portfolio}
            alt="Portfolio Website"
            width={750}
            className="place-self-center drop-shadow-2xl"
          />
          <p>Title</p>
          <p>Descriptions</p>
        </div>
        <div>
          <img
            src={omega}
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
