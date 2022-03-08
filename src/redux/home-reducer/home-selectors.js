const homeData = (state) => state.HomeReducer.home;
const userData = (state) => state.HomeReducer.user;
const transaction = (state) => state.HomeReducer.transaction;

const homeSelectors = {
  homeData,
  userData,
  transaction,
};

export default homeSelectors;
