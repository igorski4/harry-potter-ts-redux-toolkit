import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import "../app/global/styles/global.css";
import { paginationSlice } from "../store/reducers/PaginationSlice";

export const useArrPage = (): void => {
  const dispatch = useAppDispatch();
  const { setArrPage } = paginationSlice.actions;
  const { pageCount, tempPage } = useAppSelector((state) => state.paginationReducer);

  useEffect(() => {
    let firstIndex;
    if (tempPage === 0 || tempPage === 1 || pageCount <= 5) firstIndex = 0;
    else if (tempPage === pageCount - 2 || tempPage === pageCount - 1) firstIndex = pageCount - 5;
    else if (tempPage > 1 && tempPage < pageCount - 2) firstIndex = tempPage - 2;

    dispatch(setArrPage(new Array(pageCount > 5 ? 5 : pageCount).fill(firstIndex).map((el, i) => el + i)));
  }, [tempPage, pageCount]);
};
