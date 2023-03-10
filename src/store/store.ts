import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import cardReducer from "./reducers/CardSlice";
import schoolReducer from "./reducers/SchoolSlice";
import searchReducer from "./reducers/SearchSlice";
import likeReducer from "./reducers/LikeSlice";
import paginationReducer from "./reducers/PaginationSlice";

const rootReducer = combineReducers({ cardReducer, schoolReducer, searchReducer, likeReducer, paginationReducer });

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
