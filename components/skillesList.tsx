import { FaCss3Alt, FaFileCode, FaJs, FaReact, FaRobot } from "react-icons/fa";
import { MdReportProblem } from "react-icons/md";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiFramer,
  SiGit,
  SiGithub,
  SiHtml5,
  SiReactquery,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";

const SkillsList = [
  {
    name: "React.js",
    icon: <FaReact />,
  },
  {
    name: "Next.js",
    icon: <RiNextjsFill />,
  },
  {
    name: "JavaScript(ES6+)",
    icon: <FaJs />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
  },
  {
    name: "HTML5",
    icon: <SiHtml5 />,
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt />,
  },
  {
    name: "Git",
    icon: <SiGit />,
  },
  {
    name: "GitHub",
    icon: <SiGithub />,
  },
  {
    name: "Redux-Toolkit",
    icon: <SiRedux />,
  },
  {
    name: "Framer Motion",
    icon: <SiFramer />,
  },
  {
    name: "Vite",
    icon: <SiVite />,
  },
  {
    name: "Architecture",
    icon: <FaFileCode />,
  },
  {
    name: "Problem Solving",
    icon: <MdReportProblem />,
  },
  {
    name: "AI-Assisted Dev",
    icon: <FaRobot />,
  },
  {
    name: "React-query",
    icon: <SiReactquery />,
  },
];

export default SkillsList;
