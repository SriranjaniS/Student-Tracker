import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import './SubjectList.css'; // Import the CSS file for styling

const SubjectList = () => {
  const [subjects, setSubjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8080/api/subjects')
      .then(response => setSubjects(response.data))
      .catch(error => console.error(error));
  }, []);
  
  const deleteSubject = (id) => {
    axios.delete(`http://localhost:8080/api/subjects/${id}`)
      .then(() => {
        setSubjects(subjects.filter(subject => subject.id !== id));
      })
      .catch(error => console.error(error));
  };


  return (
    <div className="subject-list-container">
      <h2>Subjects</h2>
	  <IconButton onClick={() => navigate('/')} color="primary" style={{display: "flex"}}>
		  <HomeIcon />
		</IconButton>
      <Link to="/add-subject" className="add-button">Add Subject</Link>
      <table className="subject-list-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Class ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map(subject => (
            <tr key={subject.id}>
              <td>{subject.id}</td>
              <td>{subject.name}</td>
              <td>{subject.classEntity.id}</td>
              <td>
                <Link to={`/edit-subject/${subject.id}`} className="edit-button">Edit</Link>
                <button onClick={() => deleteSubject(subject.id)} className="delete-button">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubjectList;
