import React, { useState, useEffect } from 'react';
import ClassService from '../../services/ClassService';
import { useParams, useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './ClassForm.css';

function ClassForm() {
    const [name, setName] = useState('');
    const [grade, setGrade] = useState('');
    const [section, setSection] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            ClassService.getClassById(id).then((response) => {
                const classData = response.data;
                setName(classData.name);
                setGrade(classData.grade);
                setSection(classData.section);
            }).catch(error => {
                console.error('Error fetching class data:', error);
            });
        }
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const classData = { name, grade, section };

        if (id) {
            ClassService.updateClass(id, classData).then(() => {
                navigate('/classes');
            }).catch(error => {
                console.error('Error updating class data:', error);
            });
        } else {
            ClassService.createClass(classData).then(() => {
                navigate('/classes');
            }).catch(error => {
                console.error('Error creating class data:', error);
            });
        }
    };

    return (
        <div className="class-form-container">
            <h2>{id ? 'Edit Class' : 'Add New Class'}</h2>
			<IconButton onClick={() => navigate('/classes')} color="primary">
  			  <ArrowBackIcon />
  			</IconButton>
            <form onSubmit={handleSubmit} className="class-form">
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
                    <label>Grade:</label>
                    <input 
                        type="number" 
                        value={grade} 
                        onChange={(e) => setGrade(e.target.value)} 
                        required 
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label>Section:</label>
                    <input 
                        type="text" 
                        value={section} 
                        onChange={(e) => setSection(e.target.value)} 
                        required 
                        className="form-control"
                    />
                </div>
                <button type="submit" className="submit-button">Save</button>
            </form>
        </div>
    );
}

export default ClassForm;
