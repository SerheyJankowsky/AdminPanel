import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { HomeActions } from ".";

const home = createReducer([], {
  [HomeActions.getHomeData]: (_, { payload }) => payload,
});

const user = createReducer([], {
  [HomeActions.getUsersData]: (_, { payload }) => payload,
});

const transaction = createReducer([], {
  [HomeActions.setSelectedTransactions]: (_, { payload }) => payload,
});

export default combineReducers({
  home,
  user,
  transaction,
});
