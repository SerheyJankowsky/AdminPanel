import { createAction } from "@reduxjs/toolkit";

const getHomeData = createAction("home/getData");
const getUsersData = createAction("home/getUsers");

const homeAction = {
  getHomeData,
  getUsersData,
};

export default homeAction;
