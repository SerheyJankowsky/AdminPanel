import { HomeActions } from ".";
import data from "./data";

const mode = process.env.NODE_ENV !== "production";

const getHomeData = () => (dispatch) => {
  mode &&
    setTimeout(() => {
      dispatch(HomeActions.getHomeData(data.homeData));
      dispatch(HomeActions.getUsersData(data.userData));
    }, 700);
};

const homeOperations = {
  getHomeData,
};

export default homeOperations;
