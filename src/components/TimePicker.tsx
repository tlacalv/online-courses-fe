import styles from "../styles/components/datepicker.module.css";
import { useState } from "react";
import { ErrorMessage, useField } from "formik";

interface Props {
  label?: string;
  name: string;
  type?: string;
  placeholder?: string;
  [x: string]: any;
}
export const TimePicker = ({ label, ...props }: Props) => {
  const [field] = useField(props);

  return (
    <div className={styles.input}>
      {label && (
        <label className={styles.label} htmlFor={props.id || props.name}>
          {label}
        </label>
      )}

      <input className={styles.textInput} type="time" {...field} {...props} />
      {/* @ts-ignore */}
      <ErrorMessage
        name={props.name}
        component="span"
        className={styles.error}
      />
    </div>
  );
};
