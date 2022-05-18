import * as Yup from "yup";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { DatePicker } from "../../components/DatePicker";
import { TimePicker } from "../../components/TimePicker";
import { TextInput } from "../../components/TextInput";
import { Button } from "../../components/Button";
import { Select } from "../../components/Select";
import { useCourse } from "../../hooks/useCourse";
import { ErrorPopUp} from '../../components/ErrorPopUp';
import { Error} from '../../components/Error';

export const Course = () => {
  const navigate = useNavigate();
  const {updateCourse, instructors, error, found, initialValues} = useCourse();

  return (
    <>
      <button onClick={() => navigate(-1)} className="backButton">
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <h3 className="title">Course</h3>
      <hr></hr>
      {(error && found) && <ErrorPopUp {...error} />}
      {(error && !found) && <Error {...error} />}

      {found && (
        <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={Yup.object({
          name: Yup.string().required("Name is required"),
          duration: Yup.number().required("A duration is required"),
          date: Yup.string().required("Date is required"),
          time: Yup.string().required("Time is required"),
          ['instructor_id']: Yup.number().required("You need to select a instructor for this course").min(1)

        })}
        onSubmit={updateCourse}
      >
        {(formik) => (
          <Form className="regular-form">
            <TextInput
              name="name"
              placeholder="Name"
              type="text"
              label="Name"
            />
            <TimePicker name="time" placeholder="Time" label="Time" />
            <DatePicker name="date" placeholder="Date" label="Date" />
            <TextInput name="duration" placeholder="Duration in minutes" type="number" label="Duration in minutes" />

            <Select label="Instructor" name="instructor_id" as="select">
              <option value="-1">Pick something</option>
              {
                instructors.map(instructor=> (
                  <option key={instructor.id} value={instructor.id}>{instructor.name}</option>
                ))
              }
            </Select>
            <Button type="submit">Save</Button>
          </Form>
        )}
      </Formik>
      )}
      
    </>
  );
};
