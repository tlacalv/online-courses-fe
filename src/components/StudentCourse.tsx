
import { CourseI, InstructorI, StudentI } from '../interfaces'
import styles from '../styles/components/studentcourse.module.css';


interface Props {
  course: CourseI;
  onDelete: ()=>void;
}

export const StudentCourse = ({course, onDelete}:Props) => {
  
  return (
    <div className={styles.course}>
      <div className={styles.info}>
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
