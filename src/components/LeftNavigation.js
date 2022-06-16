import { IconContext } from "react-icons";
import { TbBrandGithub } from 'react-icons/tb';
import { FiLinkedin } from 'react-icons/fi';
import { FiMail } from 'react-icons/fi';
import logo from '../assets/logo.png'

const LeftNavigation = () => {
  return (
    <div className="h-screen w-24 flex flex-col fixed">
        <div className="flex-1">
            <img src={logo} width={50} className="mx-auto mt-5" alt="Andrea's Logo"/>
        </div>
        <div className="flex-1 border-r-8 border-rose-500 space-y-4">
            <IconContext.Provider value={{ className: "text-rose-500 w-12 h-12 mx-auto hover:text-rose-300" }}>
                <div>
                    <TbBrandGithub />
                </div>
            </IconContext.Provider>
            <IconContext.Provider value={{ className: "text-rose-500 w-11 h-11 mx-auto hover:text-rose-300" }}>
                <div>
                    <FiLinkedin />
                </div>
            </IconContext.Provider>
            <IconContext.Provider value={{ className: "text-rose-500 w-11 h-11 mx-auto hover:text-rose-300" }}>
                <div>
                    <FiMail />
                </div>
            </IconContext.Provider>
        </div>
    </div>
  )
}

export default LeftNavigation