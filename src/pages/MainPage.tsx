import React, { useEffect } from "react";
import { Header } from "../components/Header/Header";
import { Main } from "../components/Main/Main";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchCard } from "../store/reducers/ActionCreators";
import { schoolSlice } from "../store/reducers/SchoolSlice";
import "../app/global/styles/global.css";
import { Footer } from "../components/Footer/Footer";
import { usePaginationPage } from "../hooks/usePaginationPage";
import { useArrPage } from "../hooks/useArrPage";

export const MainPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { cards } = useAppSelector((state) => state.cardReducer);
  const { setSchool } = schoolSlice.actions;
  const { like } = useAppSelector((state) => state.likeReducer);
  const { pageCount } = useAppSelector((state) => state.paginationReducer);

  useEffect(() => {
    dispatch(fetchCard());
  }, []);

  useEffect(() => {
    dispatch(setSchool(cards));
  }, [cards]);

  useEffect(() => {
    localStorage.setItem("likes", JSON.stringify(like));
  }, [like]);

  usePaginationPage();
  useArrPage();

  return (
    <>
      <Header />
      <Main />
      {!!pageCount && <Footer />}
    </>
  );
};
