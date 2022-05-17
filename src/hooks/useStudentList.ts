import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { client } from "../api/coursesAPI";
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

import { StudentI } from "../interfaces";

export const useStudentList = () => {
  const navigate = useNavigate();
  const [students, setStudents] = useState<StudentI[]>([]);
  
  useEffect(() => {
    client.listStudents()
      .then((response=>{
        setStudents(response.data);
      }))
  }, [])

  const editStudent = (id: number) => {
    navigate(`/students/${id}`)
  }
  const deleteStudent = (id: number) => {
    Swal.fire({
      title: 'Warning!',
      text: 'Are you sure you want to delete this Student',
      icon: 'warning',
      confirmButtonText: 'Yes',
      showCancelButton: true
    }).then(({isConfirmed})=> {
      if(isConfirmed){
        client.deleteStudent(id)
        .then(response=>{
          setStudents(prev=>prev.filter(student=>student.id!==id))
        });
        
      }

    })
  }

  return {
    students,
    editStudent,
    deleteStudent
  }
}