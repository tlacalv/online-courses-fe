import { Dispatch, SetStateAction, useEffect } from "react";
import { useState } from "react";
import { client } from "../api/coursesAPI";
import { CourseI, InstructorI, StudentI } from "../interfaces";
import styles from "../styles/components/studentcourse.module.css";

interface Props {
  select: boolean;
  onSelect: (id:number) =>void;
  setSelect:Dispatch<SetStateAction<boolean>>
}

export const SelectCourse = ({ select = false, onSelect, setSelect }: Props) => {
  const [courses, setCourses] = useState<CourseI[]>([]);

  useEffect(() => {
    if (!select) return;
    client.listCourses().then((response) => {
      setCourses(response.data);
    });
  }, [select]);

  return (
    <>
      {select && (
        <div className={styles.courseSelect}>
          {courses.map((course) => (
            <div
              key={course.id}
              className={styles.course}
              onClick={() => {onSelect(course.id); setSelect(false)}}
            >
              <div className={styles.info}>
                <span className={styles.name}>{course.name}</span>
                <span className={styles.duration}>{course.duration} min</span>
                <span className={styles.date}>{course.date}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
