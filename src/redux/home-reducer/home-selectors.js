const homeData = (state) => state.HomeReducer.home;
const userData = (state) => state.HomeReducer.user;

const homeSelectors = {
  homeData,
  userData,
};

export default homeSelectors;
