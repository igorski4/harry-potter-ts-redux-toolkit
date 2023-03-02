import React from "react";
import { AnyAction } from "redux";
import { useAppDispatch } from "../../../hooks/redux";
import cl from "./Input.module.css";

interface InputProps {
  value: string;
  changeInput: (str: string) => AnyAction;
  type: string;
  placeholder: string;
}

export const Input: React.FC<InputProps> = ({ value, changeInput, type, placeholder }) => {
  const dispatch = useAppDispatch();
  return (
    <input
      onChange={(e) => {
        dispatch(changeInput(e.target.value));
      }}
      value={value}
      type={type}
      placeholder={placeholder}
      className={cl.input}
    />
  );
};
