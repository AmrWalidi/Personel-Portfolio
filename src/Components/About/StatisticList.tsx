import { Stats } from "../../Data/index";
import Statistic from "./statistic";

function StatisticList() {
  return (
    <div>
      {Stats.map((stat) => (
        <Statistic num={stat.num} context={stat.context} />
      ))}
    </div>
  );
}

export default StatisticList;
