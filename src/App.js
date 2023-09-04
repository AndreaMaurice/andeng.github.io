import LeftNavigation from "./components/LeftNavigation";
import RightNavigation from "./components/RightNavigation";
import Banner from "./components/Banner";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Resume from "./assets/resume.pdf";

function App() {
  return (
    <div className="flex h-screen">
      <LeftNavigation />
      <RightNavigation />
      <div className="grid grid-cols-1 w-full">
        <div className="w-full pt-9 ">
          <div className="text-center font-semibold">
            Check out my <a href={Resume} target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:font-extrabold hover:underline">RESUME!</a>
          </div>
        </div>
        <div className="lg:mx-48 ml-10 mr-20 h-screen">
          <Banner />
        </div>
        <div className="h-screen mx-20 sm:mb-10">
          <About />
        </div>
        <div className="h-screen mx-20">
          <Technologies />
        </div>
        <div className="sm:h-fit mx-20 mb-20">
          <Projects />
        </div>
        <div className="h-fit m-20">
          <Contact />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
