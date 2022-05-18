import styles from '../styles/components/errorpopup.module.css';
export interface Props {
  message: string;
  status: number;
}
export const ErrorPopUp = ({message, status}:Props) => {
  return (
    <div className={`${styles.error}`}>
        <p>{message}</p>
        <p>Error: {status}</p>
    </div>
  )
}
