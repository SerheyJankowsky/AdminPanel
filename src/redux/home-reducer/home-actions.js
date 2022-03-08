import { createAction } from "@reduxjs/toolkit";

const getHomeData = createAction("home/getData");
const getUsersData = createAction("home/getUsers");
const setSelectedTransactions = createAction("home/setSelectedTransactions");

const homeAction = {
  getHomeData,
  getUsersData,
  setSelectedTransactions,
};

export default homeAction;
