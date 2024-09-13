import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import '../AddStudent Component/AddStudent.css'; 

const AddStudent = () => {
    const [name, setName] = useState('');
    const [classId, setClassId] = useState('');
    const [promoted, setPromoted] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const student = { name, classId, promoted };

        axios.post('http://localhost:8080/students', student)
            .then(() => {
                navigate('/students');
            })
            .catch(error => {
                console.error('There was an error creating the student!', error);
            });
    };

    return (
        <div className="add-student-container">
            <h2>Add Student</h2>
			<IconButton onClick={() => navigate('/Students')} color="primary">
			  <ArrowBackIcon />
			</IconButton>
            <form onSubmit={handleSubmit} className="student-form">
                <div className="form-group">
                    <label>Name:</label>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label>Class ID:</label>
                    <input 
                        type="text" 
                        value={classId} 
                        onChange={(e) => setClassId(e.target.value)} 
                        required 
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label>Promoted:</label>
                    <input 
                        type="checkbox" 
                        checked={promoted} 
                        onChange={(e) => setPromoted(e.target.checked)} 
                        className="form-checkbox"
                    />
                </div>
                <button type="submit" className="submit-button">Add</button>
            </form>
        </div>
    );
};

export default AddStudent;
