import React, { useState, useEffect } from 'react';
import { fetchStudentSubject, updateStudentSubject } from '../../services/StudentSubject';
import { useParams, useNavigate } from 'react-router-dom';

const EditStudentSubject = () => {
    const { studentId, subjectId } = useParams();
    const [studentSubject, setStudentSubject] = useState({ studentId: '', subjectId: '' });
    const navigate = useNavigate();

    useEffect(() => {
        const getStudentSubject = async () => {
            const data = await fetchStudentSubject(studentId, subjectId);
            setStudentSubject(data);
        };
        getStudentSubject();
    }, [studentId, subjectId]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateStudentSubject(studentId, subjectId, studentSubject);
        navigate('/students-subjects');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudentSubject((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div>
            <h1>Edit Student Subject</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Student ID:
                    <input
                        type="number"
                        name="studentId"
                        value={studentSubject.studentId}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Subject ID:
                    <input
                        type="number"
                        name="subjectId"
                        value={studentSubject.subjectId}
                        onChange={handleChange}
                        required
                    />
                </label>
                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
};

export default EditStudentSubject;
