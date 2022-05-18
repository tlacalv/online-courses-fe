import { useField, ErrorMessage } from "formik"
import styles from '../styles/components/select.module.css'


interface Props {
  label: string;
  name: string;
  placehlder?: string;
  [x:string]: any
}

export const Select = ({label, ...props}: Props) => {
  const [ field ] = useField(props)
  
  return (
    <div className={styles.input}>
      {label && <label className={styles.label} htmlFor={props.id || props.name}>{label}</label>}
      <select className={styles.textInput} {...field} {...props} />
      {/* @ts-ignore */}
      <ErrorMessage name={props.name}className={styles.error} component="span" />
    </div>
  )
}
