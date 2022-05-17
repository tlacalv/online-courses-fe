import styles from '../styles/components/emptyList.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRectangleList } from '@fortawesome/free-solid-svg-icons';
export interface Props {
  message: string;
  status: number;
}
export const Error = ({message, status}:Props) => {
  return (
    <div className={styles.emptyList}>
        <p>{message}</p>
        <p>Error: {status}</p>
        <span><FontAwesomeIcon  icon={faRectangleList}/></span>
    </div>
  )
}
