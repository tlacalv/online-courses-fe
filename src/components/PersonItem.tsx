
import { InstructorI, StudentI } from '../interfaces'
import styles from '../styles/components/personItem.module.css';


interface Props {
  person: InstructorI | StudentI;
}

export const PersonItem = ({person}:Props) => {
  return (
    <div className={styles.person}>
      <div className={styles.info}>
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
