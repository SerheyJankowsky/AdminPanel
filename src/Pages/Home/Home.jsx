import s from "./home.module.scss";
import HomeInfo from "./components/HomeInfo";
const Home = () => {
  return (
    <div>
      <div className={s.info}>
        <HomeInfo type={"Revanue"} total={2000000} proffit={false} />
        <HomeInfo type={"Sales"} total={2000000} proffit={false} />
        <HomeInfo type={"Coast"} total={2000000} />
      </div>
    </div>
  );
};

export default Home;
