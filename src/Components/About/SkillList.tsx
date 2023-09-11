import SkillProgressBars from "./SkillProgressBars";
import { skills } from "../../Data";
function SkillList() {
  return (
    <div>
      <div></div>
      <h2>Skills</h2>
      {skills.map((skill) => (
        <SkillProgressBars key={skill.name} percent={skill.percentage} skill={skill.name} />
      ))}
    </div>
  );
}

export default SkillList;
