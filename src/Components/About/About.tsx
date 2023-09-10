import Header from "../Header";
import PersonelInfo from "./PersonelInfo";
import SkillList from "./SkillList";
import StatisticList from "./StatisticList";
function About() {
  return (
    <div id="about">
      <Header backgroundText="About me" title="Who am i ?" />
      <PersonelInfo />
      <StatisticList />
      <SkillList />
    </div>
  );
}

export default About;
