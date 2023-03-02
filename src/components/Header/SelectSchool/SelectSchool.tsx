import React from "react";
import { useAppSelector } from "../../../hooks/redux";
import { searchlSlice } from "../../../store/reducers/SearchSlice";
import { Select } from "../../UI/Select/Select";
import cl from "./SelectSchool.module.css";

export const SelectSchool: React.FC = () => {
  const { school } = useAppSelector((state) => state.schoolReducer);
  const { changeSelect } = searchlSlice.actions;
  const { select } = useAppSelector((state) => state.searchReducer);

  return (
    <div>
      <p className={cl.text}>School</p>
      <Select arr={school} changeSelect={changeSelect} value={select} />
    </div>
  );
};
