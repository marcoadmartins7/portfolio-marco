import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import Typed from "react-typed";

export const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <div className=" max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
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

        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I am 21 years old and i'm a highly motivated and ambitious Computer
          Science student, actively looking for an entry-level position in
          Braga.
        </p>
        <div>
          <Link to="work" smooth={true} duration={500} offset={-80}>
            <button className="text-white group font-bold border-2 px-6 py-3 my-2 flex items-center hover:bg-amber-400 hover:border-amber-400">
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
