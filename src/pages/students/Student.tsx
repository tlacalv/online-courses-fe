import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import { TextInput } from "../../components/TextInput";
import { Button } from "../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Error } from "../../components/Error";
import { useStudent } from "../../hooks/useStudent";

export const Student = () => {
  const navigate = useNavigate();
  const {error, found, initialValues, updateStudent} = useStudent();
  return (
    <>
      <button onClick={() => navigate(-1)} className="backButton">
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <h3 className="title">Student</h3>
      <hr></hr>
      {error && <Error {...error} />}
      {found && (
        <Formik
          enableReinitialize
          initialValues={initialValues}
          validationSchema={Yup.object({
            age: Yup.number()
              .required("Age is required")
              .min(1, "Should be a valid age"),
            name: Yup.string().required("Name is required"),
          })}
          onSubmit={updateStudent}
        >
          {(formik) => (
            <Form className="regular-form">
              <TextInput name="name" placeholder="Name" type="text" />
              <TextInput
                name="age"
                placeholder="Age"
                type="number"
                label="Age"
              />
              <Button type="submit">Save</Button>
            </Form>
          )}
        </Formik>
      )}
    </>
  );
};
