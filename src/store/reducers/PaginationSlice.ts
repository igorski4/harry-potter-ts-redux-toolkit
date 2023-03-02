import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { act } from "@testing-library/react";

interface PaginationState {
  pageCount: number;
  limit: number;
  tempPage: number;
  arrPage: number[];
}
const initialState: PaginationState = {
  pageCount: 0,
  limit: 4,
  tempPage: 0,
  arrPage: [],
};

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setTempPage(state, action: PayloadAction<number>) {
      state.tempPage = action.payload;
    },
    setPageCount(state, action: PayloadAction<number>) {
      state.pageCount = action.payload;
    },
    setArrPage(state, action: PayloadAction<number[]>) {
      state.arrPage = action.payload;
    },
    setLimit(state, action: PayloadAction<string>) {
      state.limit = +action.payload;
    },
  },
});

export default paginationSlice.reducer;
