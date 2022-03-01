import s from "./homeInfo.module.scss";
import Icon from "../../../../Component/Icons";
const HomeInfo = ({ type, total, proffit = true }) => {
  return (
    <div className={s.info__wrapper}>
      <h3>{type}</h3>
      <div className={s.info__proffit}>
        <p>$ {total.toLocaleString()}</p>
        <span>
          -1.1{proffit ? <Icon type="ArrowUp" /> : <Icon type="ArrowDown" />}
        </span>
      </div>
      <p>Compared to last month</p>
    </div>
  );
};

export default HomeInfo;
