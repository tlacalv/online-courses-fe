import { useNavigate } from "react-router-dom";
import ButtonAdd from "../../components/ButtonAdd";
import { EmptyList } from "../../components/EmptyList";
import { PersonItem } from "../../components/PersonItem";
import { useInstructorList } from "../../hooks/useInstructorList";

export const InstructorList = () => {
  const navigate = useNavigate();
  const { instructors, editInstructor, deleteInstructor } = useInstructorList();

  return (
    <>
      <h3 className="title">Instructors</h3>
      <hr></hr>
      {!instructors && <EmptyList />}
      <div className="list">
        {instructors.map((instructor) => (
          <PersonItem
            key={instructor.id}
            person={instructor}
            onClick={() => editInstructor(instructor.id)}
            onDelete={() => deleteInstructor(instructor.id)}
          />
        ))}
      </div>

      <ButtonAdd onClick={() => navigate("/instructors/new")} />
    </>
  );
};
