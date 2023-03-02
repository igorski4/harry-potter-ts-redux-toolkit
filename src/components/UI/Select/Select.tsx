import React from "react";
import { AnyAction } from "redux";
import { useAppDispatch } from "../../../hooks/redux";
import cl from "./Select.module.css";

interface SelectProps {
  school: string[];
  changeSelect: (str: string) => AnyAction;
}

export const Select: React.FC<SelectProps> = ({ school, changeSelect }) => {
  const dispatch = useAppDispatch();
  return (
    <select onChange={(e) => dispatch(changeSelect(e.target.value))} className={cl.select}>
      {school.map((el: string) => (
        <option key={el}>{el}</option>
      ))}
    </select>
  );
};
