import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchState {
  input: string;
  select: string;
}

interface SearchParams {
  search?: string;
  school: string;
  page: number;
  limit: number;
}

const searchParams: SearchParams = JSON.parse(sessionStorage.getItem("searchParams") || "[]");

const initialState: SearchState = {
  input: searchParams.search ?? "",
  select: searchParams.school,
};

export const searchlSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    changeInput(state, action: PayloadAction<string>) {
      state.input = action.payload;
    },
    changeSelect(state, action: PayloadAction<string>) {
      state.select = action.payload;
    },
  },
});

export default searchlSlice.reducer;
