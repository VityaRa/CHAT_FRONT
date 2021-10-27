import classNames from "classnames";
import React from "react";
import { IMessage } from "../../utils/types";
import style from "./style.module.scss";

interface IProps {
  _message: IMessage;
}

export const Message = ({ _message }: IProps) => {
  const { name, userId, date, message } = _message;

  return (
    <div className={classNames(style.container, {
        [style.active]: userId === "2"
    })}>
      <div className={style.meta}>
        <p>{name}</p>
        <p>{date}</p>
      </div>
      <p className={style.message}>{message}</p>
    </div>
  );
};
