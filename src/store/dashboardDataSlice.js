import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
};

const dashboardDataSlice = createSlice({
  name: "Dashboard data",
  initialState,
  reducers: {
    handleDashboardData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { handleDashboardData } = dashboardDataSlice.actions;
export default dashboardDataSlice.reducer;
