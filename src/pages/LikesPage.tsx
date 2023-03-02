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
  const { limit, pageCount } = useAppSelector((state) => state.paginationReducer);
  const { input, select } = useAppSelector((state) => state.searchReducer);
  const { setPageCount, setTempPage } = paginationSlice.actions;
  const { like } = useAppSelector((state) => state.likeReducer);
  const { setSchool } = schoolSlice.actions;

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
    dispatch(setPageCount(Math.ceil(cards.filter((card) => like.includes(card.name)).length / limit)));
    dispatch(setTempPage(0));
  }, [cards, limit, input, select]);

  useArrPage();

  return (
    <>
      <Likes />
      {!!pageCount && <Footer />}
    </>
  );
};
