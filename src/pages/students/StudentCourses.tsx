import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useStudent } from "../../hooks/useStudent";
import { StudentCourse } from "../../components/StudentCourse";
import { SelectCourse } from "../../components/SelectCourse";
import { useState } from "react";
import { Button } from "../../components/Button";
import { ErrorPopUp } from "../../components/ErrorPopUp";

export const StudentCourses = () => {
  const navigate = useNavigate();
  const [select, setSelect] = useState(false)
  const { error, found, courses, deleteStudentCourse, selectCourse } = useStudent();



  return (
    <div className="list">
      <button onClick={() => navigate(-1)} className="backButton">
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <h3 className="title">New Student</h3>
      <hr></hr>
      <Button onClick={()=>setSelect(!select)}>Select course</Button>
      <SelectCourse select={select} onSelect={selectCourse} setSelect={setSelect}/>
      {error && <ErrorPopUp {...error} />}
      <div className="list">
        {found &&
          courses.map((course) => (
            <StudentCourse
              key={course.id}
              course={course}
              onDelete={() => {deleteStudentCourse(course.id)}}
            />
          ))}
      </div>
    </div>
  );
};
