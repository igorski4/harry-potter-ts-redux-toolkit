import React, { useState } from "react";
import cl from "./Pagination.module.css";
import { PageItem } from "./PageItem/PageItem";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { paginationSlice } from "../../../store/reducers/PaginationSlice";
import { Select } from "../Select/Select";

export const Pagination: React.FC = () => {
  const { arrPage, tempPage, pageCount } = useAppSelector((state) => state.paginationReducer);
  const dispatch = useAppDispatch();
  const { setTempPage, setLimit } = paginationSlice.actions;
  const [arrLimit] = useState<number[]>([4, 8, 16]);
  const { limit } = useAppSelector((state) => state.paginationReducer);

  return (
    <div className={cl.wrapper}>
      <div>
        {pageCount > 5 && (
          <PageItem key="🢠" onClick={() => dispatch(setTempPage(tempPage - 1))} disabledItem={tempPage === 0}>
            🢠
          </PageItem>
        )}
        {arrPage.map((page) => (
          <PageItem key={page} onClick={() => dispatch(setTempPage(page))} activeItem={tempPage === page}>
            {page + 1}
          </PageItem>
        ))}
        {pageCount > 5 && (
          <PageItem
            key="🢡"
            onClick={() => {
              if (tempPage + 1 < pageCount) dispatch(setTempPage(tempPage + 1));
            }}
            disabledItem={tempPage === pageCount - 1}
          >
            🢡
          </PageItem>
        )}
      </div>
      <div>
        <Select arr={arrLimit} changeSelect={setLimit} value={limit} />
      </div>
    </div>
  );
};
