import React, { useState } from 'react';
import axios from 'axios';
import './AddSubject.css'; 
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const AddSubject = () => {
  const [name, setName] = useState('');
  const [classId, setClassId] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = { name, classEntity: { id: classId } };

    axios.post('http://localhost:8080/api/subjects', subject)
      .then(() => window.location.href = '/subjects')
      .catch(error => console.error(error));
  };

  return (
    <div className="add-subject-container">
      <h2>Add Subject</h2>
	  <IconButton onClick={() => navigate('/subjects')} color="primary">
	  			  <ArrowBackIcon />
	  			</IconButton>
      <form onSubmit={handleSubmit} className="add-subject-form">
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
        <button type="submit" className="submit-button">Add</button>
      </form>
    </div>
  );
};

export default AddSubject;
