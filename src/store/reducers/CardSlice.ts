import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Card } from "../../models/Card";
import { fetchCard } from "./ActionCreators";

interface CardState {
  cards: Card[];
}

const initialState: CardState = {
  cards: [],
};

export const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCard.fulfilled.type]: (state, action: PayloadAction<Card[]>) => {
      state.cards = action.payload;
    },
  },
});

export default cardSlice.reducer;
