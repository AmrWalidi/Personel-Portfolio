import Header from "../Header";
import PersonelInfo from "./PersonelInfo";
import SkillList from "./SkillList";
import StatisticList from "./StatisticList";
function About() {
  return (
    <div id="about">
      <Header backgroundText="About me" title="Who am i ?" />
      <div className="infos-stats">
        <PersonelInfo />
        <StatisticList />
      </div>
      <SkillList />
    </div>
  );
}

export default About;
