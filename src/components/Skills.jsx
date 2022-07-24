import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Mysql from "../assets/mysql.png";
import Fade from "react-reveal/Fade";
import Skill from "./Skill";

export const Skills = () => {
  const techs = [
    { tech: HTML, techName: "HTML" },
    { tech: CSS, techName: "CSS" },
    { tech: JavaScript, techName: "JAVASCRIPT" },
    { tech: ReactImg, techName: "REACT" },
    { tech: GitHub, techName: "GITHUB" },
    { tech: Tailwind, techName: "TAILWINDS" },
    { tech: Mysql, techName: "MYSQL" },
  ];
  return (
    <div name="skills" className="bg-[#0a192f] text-gray-300 w-full h-full">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <Fade left delay={150} duration={1000} distance={"6rem"}>
          <div>
            <p className="text-6xl font-bold inline border-b-4 border-amber-400  ">
              Skills
            </p>
            <p className="py-4 text-2xl ">
              There are the techonologies I've worked with
            </p>
          </div>
        </Fade>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {techs.map((tech) => (
            <Skill tech={tech.tech} techName={tech.techName} />
          ))}
        </div>
      </div>
    </div>
  );
};
