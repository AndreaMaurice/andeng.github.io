import { IconContext } from "react-icons";
import { FaReact } from 'react-icons/fa';
import { FaLaravel } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { SiFirebase } from 'react-icons/si';
import { DiPhp } from 'react-icons/di';
import { GrMysql } from 'react-icons/gr';
import { BsGithub } from 'react-icons/bs';
import { DiHtml5 } from 'react-icons/di';
import { DiCss3 } from 'react-icons/di';

const Technologies = () => {
  return (
    <div className="h-full w-auto mx-48 text-slate-400 flex flex-col">
      <div className="text-rose-500 text-5xl font-bold flex justify-center">
        <p>
          Skills <span className="text-slate-400">&</span> Technologies
        </p>
      </div>
      <div className="flex justify-center mt-20">
        <table class="w-auto border-collapse">
          <thead>
            <tr>
              <th className="w-36 h-36 hover:scale-110 transition duration-300 ease-in-out">ReactJS
              <IconContext.Provider
                  value={{
                    className:
                      "text-rose-500 w-10 h-11 mx-auto",
                  }}
                >
                  <div>
                    <FaReact />
                  </div>
                </IconContext.Provider>
              </th>
              <th className="border-2 border-t-0 border-slate-700 w-36 h-36 group hover:scale-110 transition duration-300 ease-in-out">
                React Native
                <IconContext.Provider
                  value={{
                    className:
                      "text-rose-500 w-10 h-11 mx-auto",
                  }}
                >
                  <div>
                    <FaReact />
                  </div>
                </IconContext.Provider>
              </th>
              <th className="w-36 h-36 hover:scale-110 transition duration-300 ease-in-out">Javascript
              <IconContext.Provider
                  value={{
                    className:
                      "text-rose-500 w-10 h-11 mx-auto",
                  }}
                >
                  <div>
                    <SiJavascript />
                  </div>
                </IconContext.Provider>
              </th>
              <th className="border-2 border-t-0 border-slate-700 w-36 h-36 hover:scale-110 transition duration-300 ease-in-out">
                Laravel
                <IconContext.Provider
                  value={{
                    className:
                      "text-rose-500 w-10 h-11 mx-auto",
                  }}
                >
                  <div>
                    <FaLaravel />
                  </div>
                </IconContext.Provider>
              </th>
              <th className="w-36 h-36 hover:scale-110 transition duration-300 ease-in-out">PHP
              <IconContext.Provider
                  value={{
                    className:
                      "text-rose-500 w-10 h-11 mx-auto",
                  }}
                >
                  <div>
                    <DiPhp />
                  </div>
                </IconContext.Provider>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="border-2 border-l-0 border-b-0 border-slate-700 w-36 h-36 hover:scale-110 transition duration-300 ease-in-out">
                MySQL
                <IconContext.Provider
                  value={{
                    className:
                      "text-rose-500 w-10 h-11 mx-auto",
                  }}
                >
                  <div>
                    <GrMysql />
                  </div>
                </IconContext.Provider>
              </th>
              <th className="w-36 h-36 hover:scale-110 transition duration-300 ease-in-out">Firebase
              <IconContext.Provider
                  value={{
                    className:
                      "text-rose-500 w-10 h-11 mx-auto",
                  }}
                >
                  <div>
                    <SiFirebase />
                  </div>
                </IconContext.Provider>
              </th>
              <th className="border-2 border-b-0 border-slate-700 w-36 h-36 hover:scale-110 transition duration-300 ease-in-out">
                Git & Github
                <IconContext.Provider
                  value={{
                    className:
                      "text-rose-500 w-10 h-11 mx-auto",
                  }}
                >
                  <div>
                    <BsGithub />
                  </div>
                </IconContext.Provider>
              </th>
              <th className="w-36 h-36 hover:scale-110 transition duration-300 ease-in-out">HTML
              <IconContext.Provider
                  value={{
                    className:
                      "text-rose-500 w-10 h-11 mx-auto",
                  }}
                >
                  <div>
                    <DiHtml5 />
                  </div>
                </IconContext.Provider>
              </th>
              <th className="border-2 border-r-0 border-b-0 border-slate-700 w-36 h-36 hover:scale-110 transition duration-300 ease-in-out">
                CSS
                <IconContext.Provider
                  value={{
                    className:
                      "text-rose-500 w-10 h-11 mx-auto",
                  }}
                >
                  <div>
                    <DiCss3 />
                  </div>
                </IconContext.Provider>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Technologies;
