import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PaginationState {
  pageCount: number;
  limit: number;
  tempPage: number;
  arrPage: number[];
}

interface SearchParams {
  search?: string;
  school: string;
  page: number;
  limit: number;
}

const searchParams: SearchParams = JSON.parse(sessionStorage.getItem("searchParams") || "[]");

const initialState: PaginationState = {
  pageCount: 0,
  limit: +searchParams.limit,
  tempPage: +searchParams.page - 1,
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
