import { useEffect } from 'react';
import { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes, NavLink, useLocation} from 'react-router-dom';
import { DefaultLayout } from '../layouts/DefaultLayout';
import { Course, CourseList, Home, Instructor, InstructorList, NewCourse, NewInstructor, NewStudent, Student, StudentList } from '../pages';
import { StudentCourses } from '../pages/students/StudentCourses';

export const Navigation = () => {
  
  return (
    <BrowserRouter>
      <div className={`App`}>
        
        <Routes>
        <Route path='/' element={<DefaultLayout><Home /></DefaultLayout>}  />

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

          
          <Route path='/*' element={<Navigate to="/" replace />}  />
        </Routes>
      </div>
    
    </BrowserRouter>
  )
}
