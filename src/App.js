import LeftNavigation from "./components/LeftNavigation";
import RightNavigation from "./components/RightNavigation";
import Banner from "./components/Banner";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="flex sm:text-xs md:text-sm lg:text-base h-screen">
      <LeftNavigation />
      <RightNavigation />
      <div className="grid grid-cols-1 w-full">
        <div className="mx-48 h-screen">
        <Banner />
        </div>
        <div className="h-screen mb-10">
        <About />
        </div>
        <div className="h-screen">
        <Technologies />
        </div>
        <div className="h-fit mb-20">
        <Projects />
        </div>
        <div className="h-screen">
        <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
