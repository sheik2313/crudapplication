import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './coursedetailedit.css'

function Editemp() {
  const [studentname, setStudentname] = useState('');
  const [coursename, setCoursename] = useState('');
  const [duration, setDuration] = useState('');

  const { id } = useParams();
  const navigate = useNavigate();

  const fetchdata = (id) => {
    console.log(id);
    axios.get(`http://localhost:4000/courseonedetailfind/${id}`)
      .then((response) => {
        console.log(response.data.data);
        const { studentname, coursename, duration } = response.data.data;
        setStudentname(studentname);
        setCoursename(coursename);
        setDuration(duration);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (id) {
      fetchdata(id);
    }
  }, [id]);

  const submit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:4000/updatecoursedetail/${id}`, { studentname, coursename, duration });
      alert("Updated successfully");
      navigate('/coursedetailfind'); 
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='detaileditbg pt-0'>
      <h2 className='text-light pt-5' >Edit Course Detail</h2>
      <div className='editouterview'>
        
          <form >
            <label className='text-light mb-2' >Student Name</label>
            <input
              className='form-control mb-4'
              name='studentname'
              value={studentname}
              onChange={(e) => setStudentname(e.target.value)}
              type='text'
              required
            />
            <label className='text-light mb-2'>Course Name</label>
            <input
              className='form-control mb-4'
              name='coursename'
              value={coursename}
              onChange={(e) => setCoursename(e.target.value)}
              type='text'
              required
            />
            <label className='text-light mb-2' >Duration</label>
            <input
              className='form-control mb-4'
              name='duration'
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              type='text'
              required
            />
             <button class="submit"onClick={submit} type="text">submit</button>
          </form>
        </div>
      </div>
   
  );
}

export default Editemp;

