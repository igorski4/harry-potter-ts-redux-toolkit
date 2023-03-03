import { count } from "console";
import React, { useEffect } from "react";
import { Footer } from "../components/Footer/Footer";
import { Likes } from "../components/Likes/Likes";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { useArrPage } from "../hooks/useArrPage";
import { fetchCard } from "../store/reducers/ActionCreators";
import { paginationSlice } from "../store/reducers/PaginationSlice";
import { schoolSlice } from "../store/reducers/SchoolSlice";

export const LikesPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { cards } = useAppSelector((state) => state.cardReducer);
  const { limit, pageCount, tempPage } = useAppSelector((state) => state.paginationReducer);
  const { setPageCount, setTempPage } = paginationSlice.actions;
  const { like } = useAppSelector((state) => state.likeReducer);
  const { setSchool } = schoolSlice.actions;

  useEffect(() => {
    dispatch(fetchCard());
  }, []);

  useEffect(() => {
    dispatch(setSchool(cards));
    dispatch(setTempPage(0));
  }, [cards]);

  useEffect(() => {
    localStorage.setItem("likes", JSON.stringify(like));
  }, [like]);

  useEffect(() => {
    dispatch(setPageCount(Math.ceil(cards.filter((card) => like.includes(card.name)).length / limit)));
  }, [limit, like, cards]);

  useEffect(() => {
    if (tempPage === pageCount) dispatch(setTempPage(tempPage - 1));
  }, [pageCount]);

  useEffect(() => {
    dispatch(setTempPage(tempPage));
  }, [tempPage]);

  useArrPage();

  return (
    <>
      <Likes />
      {!!pageCount && <Footer />}
    </>
  );
};
