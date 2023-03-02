import React, { useEffect } from "react";
import { Header } from "../components/Header/Header";
import { Main } from "../components/Main/Main";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchCard } from "../store/reducers/ActionCreators";
import { schoolSlice } from "../store/reducers/SchoolSlice";
import "./global/styles/global.css";

function App() {
  const dispatch = useAppDispatch();
  const { cards } = useAppSelector((state) => state.cardReducer);
  const { setSchool } = schoolSlice.actions;
  const { like } = useAppSelector((state) => state.likeReducer);

  useEffect(() => {
    dispatch(fetchCard());
  }, []);

  useEffect(() => {
    dispatch(setSchool(cards));
  }, [cards]);

  useEffect(() => {
    localStorage.setItem("likes", JSON.stringify(like));
  }, [like]);

  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
