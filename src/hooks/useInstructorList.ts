import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { client } from "../api/coursesAPI";
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

import { InstructorI } from "../interfaces";

export const useInstructorList = () => {
  const navigate = useNavigate();
  const [instructors, setInstructors] = useState<InstructorI[]>([]);
  
  useEffect(() => {
    client.listInstructors()
      .then((response=>{
        setInstructors(response.data);
      }))
  }, [])

  const editInstructor = (id: number) => {
    navigate(`/instructors/${id}`)
  }
  const deleteInstructor = (id: number) => {
    Swal.fire({
      title: 'Warning!',
      text: 'Are you sure you want to delete this Instructor',
      icon: 'warning',
      confirmButtonText: 'Yes',
      showCancelButton: true
    }).then(({isConfirmed})=> {
      if(isConfirmed){
        client.deleteInstructor(id)
        .then(response=>{
          setInstructors(prev=>prev.filter(instructor=>instructor.id!==id))
        });
        
      }

    })
  }

  return {
    instructors,
    editInstructor,
    deleteInstructor
  }
}