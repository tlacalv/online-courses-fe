import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { client } from '../../api/coursesAPI';
import ButtonAdd from '../../components/ButtonAdd';
import { EmptyList } from '../../components/EmptyList';
import { PersonItem } from '../../components/PersonItem';
import { InstructorI } from '../../interfaces';



export const InstructorList = () => {
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
  
  return (
    <>
      <h3 className='title'>Instructors</h3>
      <hr></hr>
      {
        !instructors && <EmptyList />
      }
      <div className='list'>
        {
          instructors.map(instructor => <PersonItem key={instructor.id} person={instructor} onClick={()=>editInstructor(instructor.id)}/>)

        }
      </div>
      

      <ButtonAdd onClick={()=>navigate('/instructors/new')}/>
    </>
  )
}
