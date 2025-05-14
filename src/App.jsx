import React from 'react'
import { Route, Routes } from 'react-router-dom'

import CoursesList from './pages/student/CoursesList'
import CourseDetail from './pages/student/CourseDetail'
import MyEnrollments from './pages/student/MyEnrollments'
import Player from './pages/student/Player'
import Loading from './components/student/Loading'
import Educator from './pages/educator/Educator'
import Dashboard from './pages/educator/Dashboard'
import AddCourse from './pages/educator/AddCourse'
import MyCourses from './pages/educator/MyCourses'
import HomePage from './pages/student/HomePage'



const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/course-list' element={<CoursesList/>}/>
        <Route path='/course-list/:input' element={<CoursesList/>}/>        
        <Route path='/course/:id' element={<CourseDetail/>}/>        
        <Route path='/my-enrollments' element={<MyEnrollments/>}/>        
        <Route path='/player/:courseId' element={<Player/>}/>        
        <Route path='/loading/:path' element={<Loading/>}/>        
        <Route path='/educator' element={<Educator/>}/>        
        <Route path='/educator' element={<Dashboard/>}/>        
        <Route path='/add-course' element={<AddCourse/>}/>        
        <Route path='/my-course' element={<MyCourses/>}/>   
       

        

      </Routes>
    
    
    
    
    
    </div>
  )
}

export default App