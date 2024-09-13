import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import '../EditStudent Component/EditStudent.css'; 

const EditStudent = () => {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [classId, setClassId] = useState('');
    const [promoted, setPromoted] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8080/students/${id}`)
            .then(response => {
                const student = response.data;
                setName(student.name);
                setClassId(student.classId);
                setPromoted(student.promoted);
            })
            .catch(error => {
                console.error('There was an error fetching the student data!', error);
            });
    }, [id]);

    const handleSubmit = (event) => {
        event.preventDefault();

        const updatedStudent = { name, classId, promoted };

        axios.put(`http://localhost:8080/students/${id}`, updatedStudent)
            .then(() => {
                navigate('/students');
            })
            .catch(error => {
                console.error('There was an error updating the student!', error);
            });
    };

    return (
        <div className="edit-student-container">
            <h2>Edit Student</h2>
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
                <button type="submit" className="submit-button">Update</button>
            </form>
        </div>
    );
};

export default EditStudent;
