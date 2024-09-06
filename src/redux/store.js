import { configureStore } from "@reduxjs/toolkit";
import fetchReducer from "./fetchCar";
import reportReducer from "./fetchReport";
import carReducer from "./fetchCarList";

export const store = configureStore({
  reducer: {
    mobil: fetchReducer,
    report: reportReducer,
    car: carReducer,
  },
});
