import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getTeacher, updateTeacher } from '../../services/TeacherService';
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import '../EditTeacher/EditTeacher.css'; 

const EditTeacher = () => {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [subjectId, setSubjectId] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTeacher = async () => {
            const response = await getTeacher(id);
            setName(response.data.name);
            setSubjectId(response.data.subject.id);
        };
        fetchTeacher();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const teacher = { name, subject: { id: subjectId } };
        await updateTeacher(id, teacher);
        navigate('/teachers');
    };

    return (
        <div className="edit-teacher">
            <h1>Edit Teacher</h1>
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
                <button type="submit" className="submit-button">Update Teacher</button>
            </form>
        </div>
    );
};

export default EditTeacher;
