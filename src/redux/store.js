import { configureStore } from "@reduxjs/toolkit";
import { HomeReducer } from "./home-reducer";
export const store = configureStore({
  reducer: {
    HomeReducer,
  },
  devTools: true,
});
