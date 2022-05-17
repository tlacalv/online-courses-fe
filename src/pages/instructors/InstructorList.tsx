import React, { useEffect } from 'react'
import { useState } from 'react'
import { client } from '../../api/coursesAPI';
import ButtonAdd from '../../components/ButtonAdd';
import { EmptyList } from '../../components/EmptyList';
import { PersonItem } from '../../components/PersonItem';
import { InstructorI } from '../../interfaces';



export const InstructorList = () => {
  const [instructors, setInstructors] = useState<InstructorI[]>([]);
  
  useEffect(() => {
    client.listInstructors()
      .then((response=>{
        setInstructors(response.data);
      }))
  }, [])
  
  return (
    <>
      <h3 className='title'>Instructors</h3>
      <hr></hr>
      {
        !instructors && <EmptyList />
      }
      <div className='list'>
        {
          instructors.map(instructor => <PersonItem person={instructor}/>)

        }
      </div>
      

      <ButtonAdd onClick={()=>{}}/>
    </>
  )
}
