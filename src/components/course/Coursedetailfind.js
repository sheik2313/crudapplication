import React, { useEffect, useState } from 'react';
import './coursedetailfind.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Coursedetailfind() {
  const navigate = useNavigate();

  const [coursedetail, setCoursedetail] = useState([]);

  const fetchCourseDetails = () => {
    axios.get('http://localhost:4000/coursedetail')
      .then((res) => {
        setCoursedetail(res.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleEdit = (courseId) => {
    navigate(`/coursedetailedit/${courseId}`);
  };

  const handleDelete = (courseId) => {
    axios.post(`http://localhost:4000/coursedetaildelete/${courseId}`)
      .then((res) => {
        setCoursedetail(coursedetail.filter(course => course._id !== courseId));
        navigate('/')
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchCourseDetails();
  }, []);

  return (
    <div className='coursedetailbg'>
      <div className='coursetable'>
        <div className="container">
          <ul className="responsive-table">
            <li className="table-header">
              <div className="col col-1">Name</div>
              <div className="col col-2">Course Name</div>
              <div className="col col-3">Duration</div>
              <div className="col col-4">Edit</div>
              <div className="col col-5">Delete</div>
            </li>
            {
              coursedetail.map((item) => (
                <li className="table-row" key={item._id}>
                  <div className="col col-1" data-label="Name">{item.studentname}</div>
                  <div className="col col-2" data-label="Course Name">{item.coursename}</div>
                  <div className="col col-3" data-label="Duration">{item.duration}</div>
                  <div className="col col-4" data-label="Edit">
                    <button onClick={() => handleEdit(item._id)}>Edit</button>
                  </div>
                  <div className="col col-5" data-label="Delete">
                    <button onClick={() => handleDelete(item._id)}>Delete</button>
                  </div>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Coursedetailfind;
