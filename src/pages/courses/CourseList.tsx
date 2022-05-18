import { useNavigate } from "react-router-dom";
import ButtonAdd from "../../components/ButtonAdd";
import { CourseItem } from "../../components/CourseItem";
import { EmptyList } from "../../components/EmptyList";
import { PersonItem } from "../../components/PersonItem";
import { useCourseList } from "../../hooks/useCourseList";
import { useInstructorList } from "../../hooks/useInstructorList";

export const CourseList = () => {
  const navigate = useNavigate();
  const { courses, editCourse, deleteCourse } = useCourseList();

  return (
    <>
      <h3 className="title">Courses</h3>
      <hr></hr>
      {!courses && <EmptyList />}
      <div className="list">
        {courses.map((course) => (
          <CourseItem 
            key={course.id}
            onClick={() => editCourse(course.id)}
            onDelete={()=>deleteCourse(course.id)}
            course={course}
          />
        ))}
      </div>

      <ButtonAdd onClick={() => navigate("/courses/new")} />
    </>
  );
};
