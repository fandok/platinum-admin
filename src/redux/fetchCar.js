import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  status: "idle",
  error: null,
  page: 1,
  limit: 10,
};

export const fetchData = createAsyncThunk(
  "car/fetchData",
  async ({ page, limit }) => {
    const response = await axios.get(
      "https://api-car-rental.binaracademy.org/admin/v2/order",
      {
        headers: {
          access_token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc",
        },
        params: {
          page,
          pageSize: limit,
        },
      }
    );

    return response.data;
  }
);

const fetchSlice = createSlice({
  name: "rentalData",
  initialState,
  reducers: {
    updatePage: (state, action) => {
      state.page = action.payload;
    },
    updateLimit: (state, action) => {
      state.limit = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.status = "success";
      state.data = action.payload;
    });
  },
});

export const { updatePage, updateLimit } = fetchSlice.actions;
const fetchReducer = fetchSlice.reducer;

export default fetchReducer;
