import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Card } from "../../models/Card";

interface SchoolState {
  school: string[];
}

const initialState: SchoolState = {
  school: [],
};

export const schoolSlice = createSlice({
  name: "school",
  initialState,
  reducers: {
    setSchool(state, action: PayloadAction<Card[]>) {
      state.school = Array.from(
        new Set(["All school", ...action.payload.map((item) => item["house"] || "Doesn't have a school")])
      );
    },
  },
});

export default schoolSlice.reducer;
