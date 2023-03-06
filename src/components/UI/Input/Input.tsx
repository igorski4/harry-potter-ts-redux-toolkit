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
  const handlerInput = (e: string) => {
    dispatch(changeInput(e));
  };

  return (
    <input
      onChange={(e) => {
        handlerInput(e.target.value);
      }}
      value={value}
      type={type}
      placeholder={placeholder}
      className={cl.input}
    />
  );
};
