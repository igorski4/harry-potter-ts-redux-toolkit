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
import { useSearchParams } from "react-router-dom";

export const MainPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { cards } = useAppSelector((state) => state.cardReducer);
  const { setSchool } = schoolSlice.actions;
  const { like } = useAppSelector((state) => state.likeReducer);
  const { pageCount } = useAppSelector((state) => state.paginationReducer);
  const { input, select } = useAppSelector((state) => state.searchReducer);
  const { tempPage, limit } = useAppSelector((state) => state.paginationReducer);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    dispatch(fetchCard());
  }, []);

  useEffect(() => {
    dispatch(setSchool(cards));
  }, [cards]);

  useEffect(() => {
    localStorage.setItem("likes", JSON.stringify(like));
  }, [like]);

  useEffect(() => {
    let searchObj = {};
    if (input) searchObj = { search: `${input}`, school: `${select}`, page: `${tempPage + 1}`, limit: `${limit}` };
    else searchObj = { school: `${select}`, page: `${tempPage + 1}`, limit: `${limit}` };
    setSearchParams(searchObj);
    sessionStorage.setItem("searchParams", JSON.stringify(searchObj));
  }, [input, select, tempPage, limit]);

  usePaginationPage();
  useArrPage();

  return (
    <>
      <Header />
      <Main />
      {pageCount && <Footer />}
    </>
  );
};
