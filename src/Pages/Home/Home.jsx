import s from "./home.module.scss";
import Info from "./components/Info";
import Chart from "../../Component/Chart";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import HomeUserWidget from "./components/HomeUserWidget";
import HomeWidgetLg from "./components/HomeWidgetLg";
import { HomeOperations, HomeSelectors } from "../../redux/home-reducer";
import Loader from "../../Component/Loader";
const Home = () => {
  const dispatch = useDispatch();
  const dataChart = useSelector(HomeSelectors.homeData);
  const dataUsers = useSelector(HomeSelectors.userData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(HomeOperations.getHomeData());
  }, []);

  useEffect(() => {
    if (dataChart.length && dataUsers.length) {
      setLoading(false);
    }
    return () => setLoading(true);
  }, [dataChart, dataUsers]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Info />
          <Chart
            data={dataChart}
            title="User Statistics"
            dataKey="Active User"
          />
          <div className={s.widget}>
            <HomeUserWidget data={dataUsers} />
            <HomeWidgetLg />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
