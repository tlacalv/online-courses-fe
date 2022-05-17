import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { client } from "../api/coursesAPI";
import { Props as ErrorProps } from "../components/Error";
import { InstructorI } from "../interfaces";

export const useInstructor = () => {
  const navigate = useNavigate();
  const params = useParams();
  
  
  const id = parseInt(params["id"]!);
  const [error, setError] = useState<ErrorProps>();
  const [found, setFound] = useState(false);
  const [initialValues, setInitialValues] = useState<InstructorI>({
    age: 0,
    name: "",
  });

  const createInstructor = (values: InstructorI) => {
    client
      .createInstructor(values)
      .then((response) => {
        navigate("/instructors");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateInstructor = (values: InstructorI) => {
    client
      .updateInstructor(id, values)
      .then((response) => {
        navigate("/instructors");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    //makes the request only if the url is requesting a single person
    if (id) {
      client
        .getInstructor(id)
        .then((response) => {
          setInitialValues((prev) => ({
            age: response.data.age,
            name: response.data.name,
          }));
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

  return {
    createInstructor,
    updateInstructor,
    error,
    found,
    initialValues,
  };
};
