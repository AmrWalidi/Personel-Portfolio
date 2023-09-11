import Info from "./Info";
import { Infos } from "../../Data/index";
function PersonelInfo() {
  return (
    <div>
      <h2>Personel Info</h2>
      {Infos.map((info) => (
        <Info key={info.label} label={info.label} text={info.text} />
      ))}
    </div>
  );
}

export default PersonelInfo;
