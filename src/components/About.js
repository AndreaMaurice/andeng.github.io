import Andrea from "./../../assets/deyi.png";

const About = () => {
  return (
    <div className="h-full w-auto mx-48 grid grid-cols-2 place-content-center text-slate-400">
      <div className="about-me">
        <p className="text-5xl font-bold text-rose-500 leading-loose">
          About Me!
        </p>
        <p className="mb-4">
          I'm currently a BS Information System's student and a passionate Web
          Developer and Designer at that. I started my coding journey when I
          took Information and Communications Technonlogy during my SHS years
          and was inspired by my friends to continue this path.
        </p>
        <p className="mb-4">
          As of now, I'm working into becoming a freelancer by providing
          services related to applications development. So don't hesitate to dm
          me if you have projects in mind.
        </p>
      </div>
      <div className="my-profile grid">
        <img
          src={Andrea}
          alt="Andrea Maurice De Guzman"
          width={350}
          className="border-rose-500 border-8 place-self-center drop-shadow-2xl"
        />
      </div>
    </div>
  );
};

export default About;
