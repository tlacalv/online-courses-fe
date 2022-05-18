import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { client } from "../api/coursesAPI";
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

import { CourseI, InstructorI } from "../interfaces";

export const useCourseList = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState<CourseI[]>([]);
  
  useEffect(() => {
    client.listCourses()
      .then((response=>{
        setCourses(response.data);
      }))
  }, [])

  const editCourse = (id: number) => {
    navigate(`/courses/${id}`)
  }
  const deleteCourse = (id: number) => {
    Swal.fire({
      title: 'Warning!',
      text: 'Are you sure you want to delete this Course',
      icon: 'warning',
      confirmButtonText: 'Yes',
      showCancelButton: true
    }).then(({isConfirmed})=> {
      if(isConfirmed){
        client.deleteCourse(id)
        .then(response=>{
          setCourses(prev=>prev.filter(course=>course.id!==id))
        });
        
      }

    })
  }

  return {
    courses,
    editCourse,
    deleteCourse
  }
}