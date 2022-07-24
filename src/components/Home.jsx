import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import Typed from "react-typed";
import Marco from "../assets/marco.png";

export const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <div className="w-full ml-[10rem]">
        <img
          className=" w-[300px] sm:w-[500px] opacity-40 sm:absolute absolute top-[17.5rem] sm:top-[6rem]  ml-[1rem] sm:ml-[2rem] "
          src={Marco}
          alt=""
        />
      </div>

      <div className=" max-w-[1000px] mx-auto  flex flex-col justify-center h-full  relative px-[1.5rem]  ">
        <p className="bg-gradient-to-r bg-clip-text text-transparent font-extrabold from-sky-400 to-amber-400 text-3xl">
          Hi, my name is
        </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Marco Martins
        </h1>

        <Typed
          className="text-3xl sm:text-7xl font-bold text-[#8892b0] py-2"
          strings={["I'm a Software Engineer", "I'm a Front-End Developer"]}
          typeSpeed={50}
          backSpeed={80}
          loop
        />

        <p className="text-[#a9b1c7] py-4 max-w-[700px] font-bold">
          I am 21 years old and i'm a highly motivated and ambitious Computer
          Science student, actively looking for an entry-level position in
          Braga.
        </p>
        <div>
          <Link to="work" smooth={true} duration={500} offset={-80}>
            <button className="text-white group font-bold border-2 px-6 py-3 my-2 flex justify-start items-center hover:bg-amber-400 hover:border-amber-400">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
