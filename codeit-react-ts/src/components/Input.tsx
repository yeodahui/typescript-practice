// HTML 기본 속성을 Props 타입으로 정의하고 싶다면
// [태그이름]HTMLAttributes<[노드타입]> 형태의 타입을 상속해 활용할 수 있다.

import { InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input({ className = "", ...rest }: Props) {
  const classNames = `${styles.input} ${className}`;
  return <input className={classNames} {...rest} />;
}
