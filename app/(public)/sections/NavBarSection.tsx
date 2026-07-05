import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
const NavBarSection = () => {
  return (
      <section className="flex flex-row items-center justify-center gap-5  relative p-2 bg-tertiary w-full border-b border-gray-200">
        <a className="text-xl">
          <FaInstagramSquare />
        </a>
        <a className="text-xl">
          <FaLinkedin />
        </a>
        <a className="text-xl">
          <FaSquareGithub />
        </a>
      </section>
  );
};

export default NavBarSection;