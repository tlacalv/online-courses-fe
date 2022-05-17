import { useNavigate } from "react-router-dom";
import ButtonAdd from "../../components/ButtonAdd";
import { EmptyList } from "../../components/EmptyList";
import { PersonItem } from "../../components/PersonItem";
import { useStudentList } from "../../hooks/useStudentList";

export const StudentList = () => {
  const navigate = useNavigate();
  const { students, editStudent, deleteStudent } = useStudentList();

  return (
    <>
      <h3 className="title">Students</h3>
      <hr></hr>

      {!students && <EmptyList />}
      <div className="list">
        {students.map((student) => (
          <PersonItem
            key={student.id}
            person={student}
            onClick={() => editStudent(student.id)}
            onDelete={() => deleteStudent(student.id)}
            onCourse={()=>{navigate(`/students/courses/${student.id}`)}}
          />
        ))}
      </div>

      <ButtonAdd onClick={() => navigate("/students/new")} />
    </>
  );
};
