import React, { useState } from 'react';
import { createStudentSubject } from '../../services/StudentSubject';
import { useNavigate } from 'react-router-dom';

const AddStudentSubject = () => {
    const [studentId, setStudentId] = useState('');
    const [subjectId, setSubjectId] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createStudentSubject({ studentId, subjectId });
        navigate('/students-subjects');
    };

    return (
        <div>
            <h1>Add Student Subject</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Student ID:
                    <input type="number" value={studentId} onChange={(e) => setStudentId(e.target.value)} required />
                </label>
                <label>
                    Subject ID:
                    <input type="number" value={subjectId} onChange={(e) => setSubjectId(e.target.value)} required />
                </label>
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default AddStudentSubject;
