import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  status: "idle",
  error: null,
  month: {
    start: "2024-06-01",
    end: "2024-06-30",
  },
};

export const fetchReport = createAsyncThunk(
  "car/fetchReport",
  async (month) => {
    const response = await axios.get(
      "https://api-car-rental.binaracademy.org/admin/order/reports",
      {
        headers: {
          access_token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTcyMTM5NzMwNX0.9tn4dKD3YpBuadO44S_m6gA-q2GIKGMc93X7r5MIJLU",
        },
        params: {
          from: month.start,
          until: month.end,
        },
      }
    );

    return response.data;
  }
);

const reportSlice = createSlice({
  name: "reportData",
  initialState,
  reducers: {
    updateMonth: (state, action) => {
      state.month.start = action.payload.start;
      state.month.end = action.payload.end;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchReport.fulfilled, (state, action) => {
      state.status = "success";
      state.data = action.payload;
    });
  },
});

export const { updateMonth } = reportSlice.actions;
const reportReducer = reportSlice.reducer;

export default reportReducer;
