import LeftNavigation from "./components/LeftNavigation";
import RightNavigation from "./components/RightNavigation";
import Banner from "./components/Banner";

function App() {
  return (
    <div className="bg-slate-800 h-screen flex sm:text-xs md:text-sm lg:text-base">
      <LeftNavigation />
      <RightNavigation />
      <div className="mx-48 h-full">
        <Banner />
      </div>
    </div>
  );
}

export default App;
