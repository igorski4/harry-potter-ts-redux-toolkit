import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LikeState {
  like: string[];
}

const initialState: LikeState = {
  like: JSON.parse(localStorage.getItem("likes") || "[]"),
};

export const likeSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    addLike(state, action: PayloadAction<string>) {
      state.like.push(action.payload);
    },
    deleteLike(state, action: PayloadAction<string>) {
      state.like = state.like.filter((el) => el !== action.payload);
    },
  },
});

export default likeSlice.reducer;
