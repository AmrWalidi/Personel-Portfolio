interface skillProp {
  skill: string;
  percent: number;
}

function SkillProgressBars({ skill, percent }: skillProp) {
  return (
    <div>
      <div className="skill-percent-group">
        <p>{skill}</p>
        <p>{percent + "%"}</p>
      </div>
      <div className="progress-bar">
        <div style={{width: percent+"%"}} className="progress-bar-filler"></div>
      </div>
    </div>
  );
}

export default SkillProgressBars;
