
import { CourseI } from '../interfaces'
import styles from '../styles/components/studentcourse.module.css';


interface Props {
  course: CourseI;
}

export const ChronogramItem = ({course}:Props) => {
  
  return (
    <div className={styles.course}>
      <div className={styles.info}>
        <span className={styles.name}>{course.name}</span>
        <span className={styles.duration}>{course.duration} min</span>
        <span className={styles.date}>{course.date}</span>
      </div>
    </div>
  )
}
