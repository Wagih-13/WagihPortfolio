import SkillsList from "@/components/skillesList";

const SkillesSection = () => {
  return (
    <div className="border-box  flex flex-row flex-wrap items-center justify-center bg-tertiary  md:gap-8 gap-2 ">
      <h2 className="section-title">Skilles</h2>

      {SkillsList.map((skill, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center  m-2 p-2 bg-tertiary "
        >
          <div className="md:text-4xl text-3xl text-secondary">
            {skill.icon}
          </div>
          <p className="md:text-xl text-md text-secondary mt-2">{skill.name}</p>
        </div>
      ))}
    </div>
  );
};

export default SkillesSection;
