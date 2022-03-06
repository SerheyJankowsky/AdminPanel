import { HomeActions } from ".";
import { data } from "./data";

const mode = process.env.NODE_ENV !== "production";

const getHomeData = () => (dispatch) => {
  mode &&
    setTimeout(() => {
      dispatch(HomeActions.getHomeData(data));
    }, 700);
};

const homeOperations = {
  getHomeData,
};

export default homeOperations;
