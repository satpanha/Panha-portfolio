import {
  FaJava,
  FaReact,
  FaGithub,
  FaFigma
} from "react-icons/fa";
import {
  SiJavascript,
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiCplusplus,
  SiSequelize,
  SiC
} from "react-icons/si";

export function getSkillLogo(name) {
  switch (name) {
    case "C":
      return <SiC className="w-5 h-5 inline-block mr-1" />;
    case "C++":
      return <SiCplusplus className="w-5 h-5 inline-block mr-1" />;
    case "Java":
      return <FaJava className="w-5 h-5 inline-block mr-1" />;
    case "JavaScript":
      return <SiJavascript className="w-5 h-5 inline-block mr-1" />;
    case "React.js":
      return <FaReact className="w-5 h-5 inline-block mr-1" />;
    case "Express.js":
      return <SiExpress className="w-5 h-5 inline-block mr-1" />;
    case "Sequelize":
      return <SiSequelize className="w-5 h-5 inline-block mr-1" />;
    case "MySQL":
      return <SiMysql className="w-5 h-5 inline-block mr-1" />;
    case "PostgreSQL":
      return <SiPostgresql className="w-5 h-5 inline-block mr-1" />;
    case "GitHub":
      return <FaGithub className="w-5 h-5 inline-block mr-1" />;
    case "Figma":
      return <FaFigma className="w-5 h-5 inline-block mr-1" />;
    default:
      return null;
  }
}
