import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./redux";
import "../app/global/styles/global.css";
import { paginationSlice } from "../store/reducers/PaginationSlice";

export const usePaginationPage = (): void => {
  const dispatch = useAppDispatch();
  const { cards } = useAppSelector((state) => state.cardReducer);
  const { limit } = useAppSelector((state) => state.paginationReducer);
  const { input, select } = useAppSelector((state) => state.searchReducer);
  const { setPageCount, setTempPage } = paginationSlice.actions;

  useEffect(() => {
    dispatch(
      setPageCount(
        Math.ceil(
          cards
            .filter(
              (card) =>
                card.house === select || select === "All school" || (!card.house && select === "Doesn't have a school")
            )
            .filter((card) => card.name.trim().toLowerCase().includes(input.trim().toLowerCase())).length / limit
        )
      )
    );
    dispatch(setTempPage(0));
  }, [cards, limit, input, select]);
};
