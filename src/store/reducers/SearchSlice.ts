import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchState {
  input: string;
  select: string;
}

const initialState: SearchState = {
  input: "",
  select: "All school",
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
