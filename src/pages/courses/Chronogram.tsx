import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import ButtonAdd from "../../components/ButtonAdd";
import { ChronogramItem } from "../../components/ChronogramItem";
import { Form, Formik } from "formik";
import { DatePicker } from "../../components/DatePicker";
import { Button } from "../../components/Button";
import { useChronogram } from "../../hooks/useChronogram";
import { EmptyList } from "../../components/EmptyList";

export const Chronogram = () => {
  const navigate = useNavigate();
  const {selectChronogram, courses, found} = useChronogram();

  return (
    <>
      <h3 className="title">Chronogram</h3>
      <hr></hr>
      <Formik
        initialValues={{
          date: "",
        }}
        validationSchema={Yup.object({
          date: Yup.string().required("Date is required")

        })}
        onSubmit={selectChronogram}
      >
        {(formik) => (
          <Form className="regular-form">
            <DatePicker name="date" placeholder="Date" label="Date" />
            <Button type="submit">Select</Button>
          </Form>
        )}
      </Formik>
      {!found&& <EmptyList message="There are no courses at this date."/>}
      <div className="list">
        {courses.map((course) => (
          <ChronogramItem 
            key={course.id}
            course={course}
          />
        ))}
      </div>

      <ButtonAdd onClick={() => navigate("/courses/new")} />
    </>
  );
};
