import React from "react";
import { useAppDispatch } from "../../../hooks/redux";
import { Card as CardInterface } from "../../../models/Card";
import cl from "./Card.module.css";
import redHeart from "./redHeart.svg";
import whiteHeart from "./whiteHeart.svg";
import { likeSlice } from "../../../store/reducers/LikeSlice";

interface CardProps {
  card: CardInterface;
  like: boolean;
}

export const Card: React.FC<CardProps> = ({ card, like }) => {
  const dispatch = useAppDispatch();
  const { addLike, deleteLike } = likeSlice.actions;
  return (
    <div className={cl.item}>
      <img
        className={cl.item__svg}
        onClick={() => (like ? dispatch(deleteLike(card.name)) : dispatch(addLike(card.name)))}
        src={like ? redHeart : whiteHeart}
        alt={like ? "❤" : "♡"}
      />
      <img
        className={cl.item__img}
        src={
          card.image ||
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png"
        }
        alt={card.name}
      />
      <div className={cl.item__text_wrapper}>
        <h2 className={cl.item__title}>{card.name}</h2>
        <p className={cl.item__text}>Actor: {card.actor} </p>
        <p className={cl.item__text}>Gender: {card.gender} </p>
        <p className={cl.item__text}>House: {card.house} </p>
        <p className={cl.item__text}>Wand core: {card.wand.core}</p>
        <p className={cl.item__text}>Alive: {card.alive ? "yes" : "no"}</p>
      </div>
    </div>
  );
};
