import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import '../AddTeacher/AddTeacher.css';


const AddTeacher = () => {
    const [name, setName] = useState('');
    const [subjectId, setSubjectId] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const teacher = { name, subject: { id: subjectId } };

        axios.post('http://localhost:8080/teachers', teacher)
            .then(() => navigate('/teachers'))
            .catch(error => console.error(error));
    };

    return (
        <div className="add-teacher">
            <h1>Add Teacher</h1>
			<IconButton onClick={() => navigate('/teachers')} color="primary">
  			  <ArrowBackIcon />
  			</IconButton>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Subject ID:</label>
                    <input
                        type="text"
                        value={subjectId}
                        onChange={(e) => setSubjectId(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="submit-button">Add Teacher</button>
            </form>
        </div>
    );
};

export default AddTeacher;
