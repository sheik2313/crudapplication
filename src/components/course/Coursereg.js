import React, { useState } from 'react'
import'./coursereg.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Coursereg() {
    const[courseregister,SetCourseregister]=useState({
        studentname:'',
        coursename:'',
        duration:''
    })

    const navigate=useNavigate()

    const registerchange=(e)=>{
        
        SetCourseregister({
            ...courseregister,
            [e.target.name]:e.target.value
        })
    }

    const regsubmit=(e)=>{
        if(courseregister.studentname && courseregister.coursename&& courseregister.duration){
        e.preventDefault()
        axios.post('http://localhost:4000/courseregister',courseregister)
        .then((res)=>{
            alert(res.data.msg)
            navigate('/coursedetailfind')
            SetCourseregister({
                studentname:'',
                coursename:'',
                duration:''

            })
        })
        .catch((err)=>{
            SetCourseregister(err)
        })
    }else{
        alert("enter the details")
    }
}

  return (
    <div className='courseregbg'>
        <h1 className='text-center text-light p-5'>Register Your Course Details</h1>

<div class="form">
      <div class="title">Welcome</div>
      <div class="subtitle">Let's submit your details</div>

      <div class="input-container ic1">
        <input placeholder="" type="text" class="input" id="firstname" onChange={registerchange} name='studentname' value={courseregister.studentname}/>
        <div class="cut"></div>
        <label class="iLabel" for="studetname">Student name</label>
      </div>

      <div class="input-container ic2">
        <input placeholder="" type="text" class="input" id="lastname" onChange={registerchange} name='coursename' value={courseregister.coursename}/>
        <div class="cut"></div>
        <label class="iLabel" for="coursename">Course name</label>
      </div>
      <div class="input-container ic2">
        <input placeholder="" type="object" class="input" id="lastname" onChange={registerchange} name='duration' value={courseregister.duration}/>
        <div class="cut"></div>
        <label class="iLabel" for="duration">Duration</label>
      </div>
     
      <button class="submit"onClick={regsubmit} type="text">submit</button>
      
    </div>
      
    </div>
  )
}

export default Coursereg
