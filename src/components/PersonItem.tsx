
import { InstructorI, StudentI } from '../interfaces'
import styles from '../styles/components/personItem.module.css';


interface Props {
  person: InstructorI | StudentI;
  onClick: () =>void;
}

export const PersonItem = ({person, onClick}:Props) => {
  return (
    <div className={styles.person}>
      <div className={styles.info} onClick={onClick}>
        <span className={styles.name}>{person.name}</span>
        <span className={styles.age}>Age: {person.age}</span>
      </div>

      <div className={styles.controls}>
        {
        person.courses && 
        <button className={styles.courses}>Courses</button>
        }
        <button className={styles.delete}>Delete</button>
      </div>
    </div>
  )
}
