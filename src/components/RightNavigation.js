import { Link } from "react-scroll";
import { IconContext } from "react-icons";
import { TbSquareRotated } from "react-icons/tb";

const RightNavigation = () => {
  return (
    <div className="sm:h-screen sm:w-24 mr-6 sm:mr-0 flex flex-col fixed float-right right-0">
      <div className="flex-1 lg:border-l-2 lg:border-slate-300 grid grid-cols-1 content-end invisible lg:visible">
        <div className="mx-auto" style={{ writingMode: "vertical-rl" }}>
          <a
            className="text-slate-900 hover:text-orange-600"
            href={"mailto:andreamauricedeguzman@gmail.com"}
          >
            andreamauricedeguzman@gmail.com
          </a>
        </div>
      </div>
      <div className="flex-1 space-y-5 grid grid-cols-1 content-center ">
        <IconContext.Provider
          value={{
            className: "text-slate-900 w-5 h-5 mx-auto hover:text-orange-600",
          }}
        >
          <div className="relative group">
            <Link
              to="banner"
              spy={true}
              activeClass="active"
              smooth={true}
              duration={500}
            >
              <TbSquareRotated className="group-hover:invisible " />
              <p className="absolute inset-0 z-10 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 duration-100 text-orange-600 font-semibold">
                Banner
              </p>
            </Link>
          </div>
        </IconContext.Provider>
        <IconContext.Provider
          value={{
            className:
              "text-slate-900 w-5 h-5 mx-auto hover:text-orange-600 relative",
          }}
        >
          <div className="relative group">
            <Link
              to="about-me"
              spy={true}
              activeClass="active"
              smooth={true}
              duration={500}
            >
              <TbSquareRotated className="group-hover:invisible" />
              <p className="absolute inset-0 z-10 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 duration-100 text-orange-600 font-semibold">
                About
              </p>
            </Link>
          </div>
        </IconContext.Provider>
        <IconContext.Provider
          value={{
            className: "text-slate-900 w-5 h-5 mx-auto hover:text-orange-600",
          }}
        >
          <div className="relative group">
            <Link
              to="tech"
              spy={true}
              activeClass="active"
              smooth={true}
              duration={500}
            >
              <TbSquareRotated className="group-hover:invisible" />
              <p className="absolute inset-0 z-10 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 duration-100 text-orange-600 font-semibold">
                Tech
              </p>
            </Link>
          </div>
        </IconContext.Provider>
        <IconContext.Provider
          value={{
            className: "text-slate-900 w-5 h-5 mx-auto hover:text-orange-600",
          }}
        >
          <div className="relative group">
            <Link
              to="projects"
              spy={true}
              activeClass="active"
              smooth={true}
              duration={500}
            >
              <TbSquareRotated className="group-hover:invisible" />
              <p className="absolute inset-0 z-10 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 duration-100 text-orange-600 font-semibold">
                Projects
              </p>
            </Link>
          </div>
        </IconContext.Provider>
        <IconContext.Provider
          value={{
            className: "text-slate-900 w-5 h-5 mx-auto hover:text-orange-600",
          }}
        >
          <div className="relative group">
            <Link
              to="contact-me"
              spy={true}
              activeClass="active"
              smooth={true}
              duration={500}
            >
              <TbSquareRotated className="group-hover:invisible" />
              <p className="absolute inset-0 z-10 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 duration-100 text-orange-600 font-semibold">
                Contact
              </p>
            </Link>
          </div>
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default RightNavigation;
