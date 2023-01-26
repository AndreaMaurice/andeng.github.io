import { IconContext } from "react-icons";
import { TbBrandGithub } from 'react-icons/tb';
import { FiLinkedin } from 'react-icons/fi';
import { FiMail } from 'react-icons/fi';
import Logo from '../assets/logo.png';

const LeftNavigation = () => {
  return (
    <div className="h-screen w-24 flex flex-col fixed">
        <div className="flex-1">
            <img src={Logo} width={35} className="mx-auto mt-5" alt="Andrea's Logo"/>
        </div>
        <div className="flex-1 border-r-4 border-rose-500 space-y-4">
            <IconContext.Provider value={{ className: "text-rose-500 w-10 h-11 mx-auto hover:text-rose-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110" }}>
                <div>
                    <a href={"https://github.com/AndreaMaurice"} target="_blank" rel="noopener noreferrer">
                        <TbBrandGithub />
                    </a>
                </div>
            </IconContext.Provider>
            <IconContext.Provider value={{ className: "text-rose-500 w-9 h-9 mx-auto hover:text-rose-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110" }}>
                <div>
                    <a href={"https://www.linkedin.com/in/andrea-maurice-de-guzman47/"} target="_blank" rel="noopener noreferrer">
                        <FiLinkedin />
                    </a>
                </div>
            </IconContext.Provider>
            <IconContext.Provider value={{ className: "text-rose-500 w-9 h-9 mx-auto hover:text-rose-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110" }}>
                <div>
                    <a href={"mailto:andreamauricedeguzman@gmail.com"} target="_blank" rel="noopener noreferrer">
                        <FiMail />
                    </a>
                </div>
            </IconContext.Provider>
        </div>
    </div>
  )
}

export default LeftNavigation