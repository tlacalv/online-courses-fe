import { ReactElement } from "react";
import styles from "../styles/components/button.module.css";

interface Props {
  children: ReactElement | string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export const Button = ({ children, onClick, type = "button" }: Props) => {
  return (
    <button className={styles.button} type={type} onClick={onClick}>
      {children}
    </button>
  );
};
