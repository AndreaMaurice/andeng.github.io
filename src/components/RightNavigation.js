import { IconContext } from "react-icons";
import { TbSquareRotated } from "react-icons/tb";

const RightNavigation = () => {
  return (
    <div className="h-screen w-24 flex flex-col fixed float-right right-0">
        <div className="flex-1 border-l-8 border-rose-500 grid grid-cols-1 content-end">
            <div className="mx-auto" style={{ writingMode: 'vertical-rl' }}>
                <a className="text-rose-500" href={"mailto:andreamauricedg@gmail.com"}>andreamauricedg@gmail.com</a>
            </div>
        </div>
        <div className="flex-1 space-y-5 grid grid-cols-1 content-center">
            <IconContext.Provider value={{ className: "text-rose-500 w-5 h-5 mx-auto hover:text-rose-300" }}>
                    <div>
                        <TbSquareRotated />
                    </div>
                </IconContext.Provider>
                <IconContext.Provider value={{ className: "text-rose-500 w-5 h-5 mx-auto hover:text-rose-300" }}>
                    <div>
                        <TbSquareRotated />
                    </div>
                </IconContext.Provider>
                <IconContext.Provider value={{ className: "text-rose-500 w-5 h-5 mx-auto hover:text-rose-300" }}>
                    <div>
                        <TbSquareRotated />
                    </div>
                </IconContext.Provider>
                <IconContext.Provider value={{ className: "text-rose-500 w-5 h-5 mx-auto hover:text-rose-300" }}>
                    <div>
                        <TbSquareRotated />
                    </div>
                </IconContext.Provider>
                <IconContext.Provider value={{ className: "text-rose-500 w-5 h-5 mx-auto hover:text-rose-300" }}>
                    <div>
                        <TbSquareRotated />
                    </div>
                </IconContext.Provider>
        </div>
    </div>
  )
}

export default RightNavigation