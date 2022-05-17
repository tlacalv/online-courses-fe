import styles from '../styles/components/emptyList.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRectangleList } from '@fortawesome/free-solid-svg-icons';

export const EmptyList = () => {
  return (
    <div className={styles.emptyList}>
        <p>You have no items on this list! try adding some</p>
        <span><FontAwesomeIcon  icon={faRectangleList}/></span>
    </div>
  )
}
