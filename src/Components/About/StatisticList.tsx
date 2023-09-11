import { Stats } from "../../Data/index";
import Statistic from "./Statistic";

function StatisticList() {
  return (
    <div className="stat-group">
      {Stats.map((stat) => (
        <Statistic key={stat.context} num={stat.num} context={stat.context} />
      ))}
    </div>
  );
}

export default StatisticList;
