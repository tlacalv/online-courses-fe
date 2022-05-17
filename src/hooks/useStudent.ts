import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css'
import { client } from "../api/coursesAPI";
import { Props as ErrorProps } from "../components/Error";
import { CourseI, StudentI } from "../interfaces";

export const useStudent = () => {
  const navigate = useNavigate();
  const params = useParams();
  
  
  const id = parseInt(params["id"]!);
  const [error, setError] = useState<ErrorProps | false>();
  const [found, setFound] = useState(false);
  const [courses, setCourses] = useState<CourseI[]>([]);
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
  const deleteStudentCourse = (course_id: number) => {
    Swal.fire({
      title: 'Warning!',
      text: 'Are you sure you want to remove the student from this course?',
      icon: 'warning',
      confirmButtonText: 'Yes',
      showCancelButton: true
    }).then(({isConfirmed})=> {
      if(isConfirmed){
        client.deleteStudentCourse(id,course_id).then(response=> {
          setCourses(prev=>prev.filter(course=>course.id!==course_id))
        })
      }

    })
    
  }
  const selectCourse = (course_id: number) => {
    client.selectStudentCourse(id,course_id).then(response=> {
      setCourses(prev=>[...prev, response.data])
    })
    .catch(err=> {
      setError({
        message:err.response.data.message,
        status: err.response.status
      })
      setTimeout(()=>setError(false),4000)
    })
  }

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
          setCourses(response.data.courses);
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
    selectCourse,
    deleteStudentCourse,
    courses,
    initialValues,
  };
};
