interface statsProp {
  num: number;
  context: string;
}

function Statistic({ num, context }: statsProp) {
  return (
    <div className="stat-container">
      <div className="stat-number">{num}</div>
      <div className="stat-content">{context}</div>
    </div>
  );
}

export default Statistic;
