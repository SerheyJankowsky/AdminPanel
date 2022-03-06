import { createAction } from "@reduxjs/toolkit";

const getHomeData = createAction("home/getData");

const homeAction = {
  getHomeData,
};

export default homeAction;
