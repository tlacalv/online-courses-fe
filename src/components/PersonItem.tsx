
import { InstructorI, StudentI } from '../interfaces'
import styles from '../styles/components/personItem.module.css';


interface Props {
  person: InstructorI | StudentI;
  onClick: () =>void;
  onDelete: ()=>void;
  onCourse?: () =>void;
}

export const PersonItem = ({person, onClick, onDelete, onCourse}:Props) => {
  return (
    <div className={styles.person}>
      <div className={styles.info} onClick={onClick}>
        <span className={styles.name}>{person.name}</span>
        <span className={styles.age}>Age: {person.age}</span>
      </div>

      <div className={styles.controls}>
        {
        person.courses && 
        <button className={styles.courses} onClick={onCourse}>Courses</button>
        }
        <button className={styles.delete} onClick={onDelete}>Delete</button>
      </div>
    </div>
  )
}
