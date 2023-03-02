import React from "react";
import { AnyAction } from "redux";
import { useAppDispatch } from "../../../hooks/redux";
import cl from "./Select.module.css";

interface SelectProps {
  arr: string[] | number[];
  changeSelect: (str: string) => AnyAction;
  value: string | number;
}

export const Select: React.FC<SelectProps> = ({ arr, changeSelect, value }) => {
  const dispatch = useAppDispatch();
  return (
    <select onChange={(e) => dispatch(changeSelect(e.target.value))} className={cl.select} value={value}>
      {arr.map((el: string | number) => (
        <option key={el}>{el}</option>
      ))}
    </select>
  );
};
