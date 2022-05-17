import styles from '../styles/components/buttonAdd.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

interface Props {
  onClick: ()=>void;
}
export default function ButtonAdd({onClick}:Props) {
  return (
    <>
    
    <button className={`${styles.btn} addBtn`} onClick={onClick}>
      <FontAwesomeIcon icon={faPlus} />
    </button>
    </>
  )
}
