import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { client } from "../api/coursesAPI";
import { Props as ErrorProps } from "../components/Error";
import { StudentI } from "../interfaces";

export const useStudent = () => {
  const navigate = useNavigate();
  const params = useParams();
  
  
  const id = parseInt(params["id"]!);
  const [error, setError] = useState<ErrorProps>();
  const [found, setFound] = useState(false);
  const [initialValues, setInitialValues] = useState<StudentI>({
    age: 0,
    name: "",
  });

  const createStudent = (values: StudentI) => {
    client
      .createStudent(values)
      .then((response) => {
        navigate("/students");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateStudent = (values: StudentI) => {
    client
      .updateStudent(id, values)
      .then((response) => {
        navigate("/students");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    //makes the request only if the url is requesting a single person
    if (id) {
      client
        .getStudent(id)
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
    createStudent,
    updateStudent,
    error,
    found,
    initialValues,
  };
};
