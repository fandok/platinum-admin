import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  status: "idle",
  error: null,
  size: "",
};

export const fetchCarList = createAsyncThunk(
  "car/fetchCarList",
  async (size) => {
    const response = await axios.get(
      "https://api-car-rental.binaracademy.org/admin/v2/car",
      {
        headers: {
          access_token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTcyMTM5NzMwNX0.9tn4dKD3YpBuadO44S_m6gA-q2GIKGMc93X7r5MIJLU",
        },
        params: {
          category: size,
        },
      }
    );
    return response.data.cars;
  }
);

const carList = createSlice({
  name: "reportData",
  initialState,
  reducers: {
    updateSize: (state, action) => {
      state.size = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchCarList.fulfilled, (state, action) => {
      state.status = "success";
      state.data = action.payload;
    });
  },
});

export const { updateSize } = carList.actions;
const carReducer = carList.reducer;

export default carReducer;
