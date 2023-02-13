import { Link } from "react-scroll";

const Banner = () => {
  return (
    <div
      className="h-full grid grid-cols-1 gap-4 content-center text-slate-800"
      id="banner"
    >
      <div>
        <h2 className="lg:text-5xl text-xl sm:text-4xl font-semibold text-slate-800">
          Hello, world! I am
        </h2>
      </div>
      <div>
        <h1 className="lg:text-6xl text-4xl leading-snug font-black">
          ANDREA MAURICE DE GUZMAN
        </h1>
      </div>
      <div className="lg:w-3/5">
        <p className="lg:text-2xl leading-snug font-semibold">
          I am a web <span className="text-orange-500">developer</span> and{" "}
          <span className="text-orange-500">designer</span> from Zambales,
          Philippines.
        </p>
      </div>
      <Link
        to="contact-me"
        spy={true}
        activeClass="active"
        smooth={true}
        duration={500}
      >
        <div className="border-2 border-slate-900 bg-slate-50 text-slate-900 w-36 text-center p-1 hover:bg-orange-500 hover:border-orange-500 hover:text-slate-50 lg:font-bold font-semibold">
          Contact Me!
        </div>
      </Link>
    </div>
  );
};

export default Banner;
