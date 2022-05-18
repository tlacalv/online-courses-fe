
import { CourseI, InstructorI, StudentI } from '../interfaces'
import styles from '../styles/components/courseitem.module.css';


interface Props {
  course: CourseI;
  onDelete: ()=>void;
  onClick: ()=>void;
}

export const CourseItem = ({course, onDelete, onClick}:Props) => {
  
  return (
    <div className={styles.course}>
      <div className={styles.info} onClick={onClick}>
        <span className={styles.name}>{course.name}</span>
        <span className={styles.duration}>{course.duration} min</span>
        <span className={styles.date}>{course.date}</span>
      </div>
      <div className={styles.controls}>
        <button className={styles.delete} onClick={onDelete}>Delete</button>
      </div>
    </div>
  )
}
