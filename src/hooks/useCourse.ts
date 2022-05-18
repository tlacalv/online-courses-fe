import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { client } from "../api/coursesAPI";
import { Props as ErrorProps } from "../components/Error";
import { CourseI, InstructorI } from "../interfaces";

export const useCourse = () => {
  const navigate = useNavigate();
  const params = useParams();

  const id = parseInt(params["id"]!);
  const [error, setError] = useState<ErrorProps | false>();
  const [found, setFound] = useState(false);
  const [instructors, setInstructors] = useState<InstructorI[]>([]);

  const [initialValues, setInitialValues] = useState<CourseI>({duration: 0,
    name: "",
    date: "",
    time: "",
    ['instructor_id']: -1,});

  const createCourse = (values: CourseI) => {
    const payload = {
      ...values,
      date: `${values.date} ${values.time}`
    }

    client
      .createCourse(payload)
      .then((response) => {
        navigate("/courses");
      })
      .catch((err) => {
        setError({
          message: err.response.data.message,
          status: err.response.status,
        });
        setTimeout(()=>setError(false),4000)
      });
  };

  const updateCourse = (values: CourseI) => {
    const payload = {
      ...values,
      date: `${values.date} ${values.time}`
    }
    client
      .updateCourse(id, payload)
      .then((response) => {
        navigate("/courses");
      })
      .catch((err) => {
        setError({
          message: err.response.data.message,
          status: err.response.status,
        });
        setTimeout(()=>setError(false),4000)
      });
  };

  useEffect(() => {
    //makes the request only if the url is requesting a single person
    if (id) {
      client
        .getCourse(id)
        .then((response) => {
          const course = {
            ...response.data,
            date: response.data.date.split(' ')[0],
            time: response.data.date.split(' ')[1],
          }
          setInitialValues(course);
          setFound(true);
        })
        .catch((err) => {
          setError({
            message: err.response.data.message,
            status: err.response.status,
          });
        });
    }
  }, []);
  useEffect(() => {
    //makes the request only if the url is requesting a single person
    client
      .listInstructors()
      .then((response) => {
        setInstructors(response.data);
      })
      .catch((err) => {
        setError({
          message: err.response.data.message,
          status: err.response.status,
        });
        setTimeout(()=>setError(false),4000)
      });
  }, []);

  return {
    createCourse,
    instructors,
    updateCourse,
    error,
    found,
    initialValues,
  };
};
