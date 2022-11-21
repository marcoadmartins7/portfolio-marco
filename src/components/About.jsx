import Fade from "react-reveal/Fade";

export const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full pb-[10rem]">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <Fade top delay={150} duration={1000}>
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl sm:text-7xl font-bold inline border-b-4 border-amber-400">
                About
              </p>
            </div>
          </Fade>
        </div>

        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <Fade left delay={150} duration={1000}>
            <div className="sm:text-right text-5xl font-bold ">
              <p>Hi, nice to meet you. Please take a look around.</p>
            </div>
          </Fade>
          <Fade bottom delay={150} duration={1000}>
            <div className="text-[1.2rem]">
              <p>
                My name is Marco Martins. I'm a front-end web developer focused
                on making beautiful and functional websites. My first real
                project in ReactJs and Tailwind was this website portfolio.
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};
