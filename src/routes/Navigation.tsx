import { BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import { DefaultLayout } from '../layouts/DefaultLayout';
import { Course, CourseList, Instructor, InstructorList, NewCourse, NewInstructor, NewStudent, Student, StudentList } from '../pages';
import { Chronogram } from '../pages/courses/Chronogram';
import { StudentCourses } from '../pages/students/StudentCourses';

export const Navigation = () => {
  
  return (
    <BrowserRouter>
      <div className={`App`}>
        
        <Routes>
          <Route path='/instructors' element={<DefaultLayout><InstructorList /></DefaultLayout>}  />
          <Route path='/instructors/new' element={<DefaultLayout><NewInstructor /></DefaultLayout>}  />
          <Route path='/instructors/:id' element={<DefaultLayout><Instructor /></DefaultLayout>}  />

          <Route path='/students' element={<DefaultLayout><StudentList /></DefaultLayout>}  />
          <Route path='/students/new' element={<DefaultLayout><NewStudent /></DefaultLayout>}  />
          <Route path='/students/:id' element={<DefaultLayout><Student /></DefaultLayout>}  />
          <Route path='/students/courses/:id' element={<DefaultLayout><StudentCourses /></DefaultLayout>}  />

          <Route path='/courses' element={<DefaultLayout><CourseList /></DefaultLayout>}  />
          <Route path='/courses/new' element={<DefaultLayout><NewCourse /></DefaultLayout>}  />
          <Route path='/courses/:id' element={<DefaultLayout><Course /></DefaultLayout>}  />

          <Route path='/chronogram' element={<DefaultLayout><Chronogram /></DefaultLayout>}  />

          
          <Route path='/*' element={<Navigate to="/courses" replace />}  />
        </Routes>
      </div>
    
    </BrowserRouter>
  )
}
