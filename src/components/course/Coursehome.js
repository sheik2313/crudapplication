import React from 'react'
import'./coursehome.css'
import { useNavigate } from 'react-router-dom'

function Coursehome() {
    const navigate=useNavigate()
    const adddetails=()=>{
        navigate('/coursereg')
    }
  return (
    <div className='homebg'>
        <h1 className='text-light text-center pt-5'>Welcome To Course Crud Application</h1>
        <p className='homesummary text-light '>This application allows users to view, edit, and delete course details. It features a main page that lists all courses with options to edit or delete each entry. When the edit button is clicked, users are navigated to a detailed edit page where they can update course information such as the student's name, course name, and duration. The application uses React, React Router for navigation, and axios for API requests to a backend server, ensuring a seamless user experience for managing course details.</p>
        <button class="submit" type="text" onClick={adddetails}>Add Course Details</button>
      
    </div>
  )
}

export default Coursehome
