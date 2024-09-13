import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import './EditSubject.css'; 

const EditSubject = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [classId, setClassId] = useState('');
  const navigate = useNavigate();
  
  useEffect(() => {
    axios.get(`http://localhost:8080/api/subjects/${id}`)
      .then(response => {
        setName(response.data.name);
        setClassId(response.data.classEntity.id);
      })
      .catch(error => console.error(error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = { name, classEntity: { id: classId } };
	
    axios.put(`http://localhost:8080/api/subjects/${id}`, subject)
      .then(() => window.location.href = '/subjects')
      .catch(error => console.error(error));
  };

  return (
    <div className="edit-subject-container">
      <h2>Edit Subject</h2>
	  <IconButton onClick={() => navigate('/subjects')} color="primary">
	    <ArrowBackIcon />
	  </IconButton>
      <form onSubmit={handleSubmit} className="edit-subject-form">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          className="form-input"
        />
        <label htmlFor="classId">Class ID</label>
        <input
          id="classId"
          type="text"
          value={classId}
          onChange={e => setClassId(e.target.value)}
          className="form-input"
        />
        <button type="submit" className="submit-button">Save</button>
      </form>
    </div>
  );
};

export default EditSubject;
