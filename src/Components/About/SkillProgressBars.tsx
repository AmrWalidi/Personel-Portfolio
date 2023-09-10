interface skillProp {
  skill: string;
  percent: number;
}

function SkillProgressBars({ skill, percent }: skillProp) {
  return (
    <div>
      <div>
        <p>{skill}</p>
        <p>{percent + "%"}</p>
      </div>
      <div>
        <div></div>
      </div>
    </div>
  );
}

export default SkillProgressBars;
