interface statsProp {
  num: number;
  context: string;
}

function Statistic({ num, context }: statsProp) {
  return (
    <div>
      <div>{num}</div>
      <div>{context}</div>
    </div>
  );
}

export default Statistic;
