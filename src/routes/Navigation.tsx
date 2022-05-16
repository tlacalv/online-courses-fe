import { useEffect } from 'react';
import { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes, NavLink, useLocation} from 'react-router-dom';
import { DefaultLayout } from '../layouts/DefaultLayout';
import { CourseList, Home, InstructorList, StudentList } from '../pages';

export const Navigation = () => {
  
  return (
    <BrowserRouter>
      <div className={`App`}>
        
        <Routes>
        <Route path='/' element={<DefaultLayout><Home /></DefaultLayout>}  />

          <Route path='/instructors' element={<DefaultLayout><InstructorList /></DefaultLayout>}  />

          <Route path='/students' element={<DefaultLayout><StudentList /></DefaultLayout>}  />

          <Route path='/courses' element={<DefaultLayout><CourseList /></DefaultLayout>}  />

          
          <Route path='/*' element={<Navigate to="/" replace />}  />
        </Routes>
      </div>
    
    </BrowserRouter>
  )
}