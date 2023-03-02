import axios from "axios";
import { Card } from "../../models/Card";
import { createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchCard = () => async (dispatch: AppDispatch) => {
//   const response = await axios.get<Card[]>("https://hp-api.onrender.com/api/characters");
//   dispatch(cardSlice.actions.cardsFetching(response.data));
// };

export const fetchCard = createAsyncThunk("users/fetchAll", async () => {
  return (await axios.get<Card[]>("https://hp-api.onrender.com/api/characters")).data;
});
