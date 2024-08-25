import { configureStore } from "@reduxjs/toolkit";
import fetchReducer from "./fetchCar";
import reportReducer from "./fetchReport";

export const store = configureStore({
  reducer: {
    mobil: fetchReducer,
    report: reportReducer,
  },
});
