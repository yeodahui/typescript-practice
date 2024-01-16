// Props
// 인터페이스를 사용해 타입을 지정, children의 경우 ReactNode라는 타입을 사용한다.

import { MouseEvent, ReactNode } from "react";
import styles from "./Button.module.css";

interface Props {
  className?: string;
  id?: string;
  children?: ReactNode;
  onClick: (e: MouseEvent) => void;
}

export default function Button({
  className = "",
  id,
  children,
  onClick,
}: Props) {
  const classNames = `${styles.button} ${className}`;
  return (
    <button className={classNames} id={id} onClick={onClick}>
      {children}
    </button>
  );
}
