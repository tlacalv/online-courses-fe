import { ErrorMessage, useField } from "formik";
import styles from "../styles/components/datepicker.module.css";

interface Props {
  label?: string;
  name: string;
  type?: string;
  placeholder?: string;
  [x: string]: any;
}
export const DatePicker = ({ label, ...props }: Props) => {
  const [field] = useField(props);

  return (
    <div className={styles.input}>
      {label && (
        <label className={styles.label} htmlFor={props.id || props.name}>
          {label}
        </label>
      )}

      <input className={styles.textInput} type="date" {...field} {...props} />
      {/* @ts-ignore */}
      <ErrorMessage
        name={props.name}
        component="span"
        className={styles.error}
      />
    </div>
  );
};
