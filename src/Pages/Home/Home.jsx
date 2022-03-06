import s from "./home.module.scss";
import Info from "./components/Info";
import Chart from "../../Component/Chart";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { HomeOperations, HomeSelectors } from "../../redux/home-reducer";
const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector(HomeSelectors.homeData);

  useEffect(() => {
    dispatch(HomeOperations.getHomeData());
  }, []);
  return (
    <div>
      <Info />
      <Chart data={data} title="User Statistics" dataKey="Active User" />
    </div>
  );
};

export default Home;
