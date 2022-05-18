import { useEffect, useState } from "react"
import { client } from "../api/coursesAPI"
import { CourseI } from "../interfaces"

export const useChronogram = () => {
  const [ courses, setCourses ] = useState<CourseI[]>([])
  const [found, setFound] =useState(true);

  const selectChronogram = ({date}:{date:string}) => {
    client.selectChronogram(date)
    .then(response=>{
      setCourses(response.data)
      
    })
  }
  useEffect(() => {
    courses.length===0? setFound(false): setFound(true);

  }, [courses])
  
  return {
    selectChronogram,
    courses,
    found
  }
}