import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useStudent } from "../../hooks/useStudent";
import { Error } from "../../components/Error";
import { StudentCourse } from "../../components/StudentCourse";
import { SelectCourse } from "../../components/SelectCourse";
import { useState } from "react";
import { Button } from "../../components/Button";

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
      {error && <Error {...error} />}
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
