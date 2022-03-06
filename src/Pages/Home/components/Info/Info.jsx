import s from "./info.module.scss";
import HomeInfo from "../HomeInfo";

const Info = () => {
  return (
    <div className={s.info}>
      <HomeInfo type={"Revanue"} total={2000000} proffit={false} />
      <HomeInfo type={"Sales"} total={2000000} proffit={false} />
      <HomeInfo type={"Coast"} total={2000000} />
    </div>
  );
};

export default Info;
