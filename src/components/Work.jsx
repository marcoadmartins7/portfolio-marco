import Riot from "../assets/riot.png";
import Mario from "../assets/mario.png";
import Memoria from "../assets/memoria.png";
import Fade from "react-reveal/Fade";
import Vending from "../assets/vending.png";

export const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <Fade top delay={150} duration={1000}>
          <div className="pb-8 ">
            <p className="text-4xl sm:text-6xl font-bold inline border-b-4 text-gray-300 border-amber-400">
              Work
            </p>
            <p className="py-6 text-2xl">Check out some of my recent work</p>
          </div>
        </Fade>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Fade left delay={150} duration={1000}>
            <div
              style={{ backgroundImage: `url(${Memoria})` }}
              className="shadow-lg shadow-[#040c16] container group rounded-md flex justify-center items-center mx-auto content-div  "
            >
              <div className="  inline text-center items-center opacity-0 group-hover:opacity-100">
                <span className="text-4xl font-bold text-white tracking-wider ">
                  MEMORY GAME
                </span>
                <div className="w-full flex flex-col justify-center mt-16">
                  <p className="font-bold text-2xl text-gray-800">
                    Memory game created with HTML, CSS & JS
                  </p>
                </div>
              </div>
            </div>
          </Fade>
          <Fade bottom delay={150} duration={1000}>
            <div
              style={{ backgroundImage: `url(${Mario})` }}
              className="shadow-lg shadow-[#040c16] container group rounded-md flex justify-center items-center mx-auto content-div "
            >
              <div className="  inline text-center items-center opacity-0 group-hover:opacity-100">
                <span className="text-4xl font-bold text-white tracking-wider ">
                  MARIO GAME
                </span>
                <div className="w-full flex flex-col justify-center mt-16">
                  <p className="font-bold text-2xl text-gray-800">
                    Mario Game create with HTML, CSS & JS
                  </p>
                </div>
              </div>
            </div>
          </Fade>
          <Fade right delay={150} duration={1000}>
            <div
              style={{ backgroundImage: `url(${Riot})` }}
              className="shadow-lg shadow-[#040c16] container group rounded-md flex justify-center items-center mx-auto content-div  "
            >
              <div className="  inline text-center items-center opacity-0 group-hover:opacity-100">
                <span className="text-4xl font-bold text-white tracking-wider ">
                  RIOT PAGE
                </span>
                <div className="w-full flex flex-col justify-center mt-16">
                  <p className="font-bold text-2xl text-gray-800">
                    Riot login page created with HMTL & CSS
                  </p>
                </div>
              </div>
            </div>
          </Fade>
          <Fade right delay={150} duration={1000}>
            <div
              style={{ backgroundImage: `url(${Vending})` }}
              className="shadow-lg shadow-[#040c16] container group rounded-md flex justify-center items-center mx-auto content-div  "
            >
              <div className="  inline text-center items-center opacity-0 group-hover:opacity-100">
                <span className="text-4xl font-bold text-white tracking-wider ">
                  VENDING MACHINE
                </span>
                <div className="w-full flex flex-col justify-center mt-16">
                  <p className="font-bold text-2xl text-gray-800">
                    Final project of university (18/20)
                  </p>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};
