import React, { useState, useEffect } from 'react';
import { fetchStudentSubjects, deleteStudentSubject } from '../../services/StudentSubject';
import { Link } from 'react-router-dom';

const StudentSubjectList = () => {
    const [studentSubjects, setStudentSubjects] = useState([]);

    useEffect(() => {
        const getStudentSubjects = async () => {
            const data = await fetchStudentSubjects();
            setStudentSubjects(data);
        };
        getStudentSubjects();
    }, []);

    const handleDelete = async (studentId, subjectId) => {
        await deleteStudentSubject(studentId, subjectId);
        setStudentSubjects(studentSubjects.filter(ss => ss.studentId !== studentId || ss.subjectId !== subjectId));
    };

    return (
        <div>
            <h1>Student Subjects</h1>
            <table>
                <thead>
                    <tr>
                        <th>Student ID</th>
                        <th>Subject ID</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {studentSubjects.map(ss => (
                        <tr key={`${ss.studentId}-${ss.subjectId}`}>
                            <td>{ss.studentId}</td>
                            <td>{ss.subjectId}</td>
                            <td>
                                <Link to={`/edit-student-subject/${ss.studentId}/${ss.subjectId}`}>Edit</Link>
                                <button onClick={() => handleDelete(ss.studentId, ss.subjectId)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link to="/add-student-subject">Add Student Subject</Link>
        </div>
    );
};

export default StudentSubjectList;
