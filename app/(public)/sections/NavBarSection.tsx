import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
const NavBarSection = () => {
  return (
    <section className="flex flex-row items-center justify-center gap-5  relative p-2 bg-tertiary w-full border-b border-gray-200">
      <a className="text-xl cursor-pointer hover:transition hover:scale-110 transition-transform duration-300">
        <FaInstagramSquare />
      </a>
      <a className="text-xl cursor-pointer hover:transition hover:scale-110 transition-transform duration-300 ">
        <FaLinkedin />
      </a>
      <a className="text-xl cursor-pointer hover:transition hover:scale-110 transition-transform duration-300">
        <FaSquareGithub />
      </a>
    </section>
  );
};

export default NavBarSection;
