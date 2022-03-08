import s from "./home.module.scss";
import Info from "./components/Info";
import Chart from "../../Component/Chart";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import HomeUserWidget from "./components/HomeUserWidjet";
import { HomeOperations, HomeSelectors } from "../../redux/home-reducer";
const Home = () => {
  const dispatch = useDispatch();
  const dataChart = useSelector(HomeSelectors.homeData);
  const dataUsers = useSelector(HomeSelectors.userData);

  useEffect(() => {
    dispatch(HomeOperations.getHomeData());
  }, []);
  return (
    <div>
      <Info />
      <Chart data={dataChart} title="User Statistics" dataKey="Active User" />
      <div>
        <HomeUserWidget data={dataUsers} />
      </div>
    </div>
  );
};

export default Home;
