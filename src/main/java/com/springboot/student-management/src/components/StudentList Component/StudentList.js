import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import axios from 'axios';
import '../StudentList Component/StudentList.css'; // Import a CSS file for styling

const StudentList = () => {
    const [students, setStudents] = useState([]);
	const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8080/students')
            .then(response => {
                setStudents(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the students!', error);
            });
    }, []);

    const deleteStudent = (id) => {
        axios.delete(`http://localhost:8080/students/${id}`)
            .then(() => {
                setStudents(students.filter(student => student.id !== id));
            })
            .catch(error => {
                console.error('There was an error deleting the student!', error);
            });
    };

    return (
        <div className="student-list-container">
            <h2>Student List</h2>
			<IconButton onClick={() => navigate('/')} color="primary" style={{display: "flex"}}>
			  <HomeIcon />
			</IconButton>
            <Link to="/add" className="add-student-button">Add Student</Link>
            <table className="student-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Class ID</th>
                        <th>Promoted</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student => (
                        <tr key={student.id}>
                            <td>{student.name}</td>
                            <td>{student.classId}</td>
                            <td>{student.promoted ? 'Yes' : 'No'}</td>
                            <td className="action-buttons">
                                <Link to={`/edit/${student.id}`} className="edit-button">Edit</Link>
                                <button onClick={() => deleteStudent(student.id)} className="delete-button">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentList;
