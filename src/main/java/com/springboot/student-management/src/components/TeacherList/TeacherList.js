import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { getTeachers, deleteTeacher } from '../../services/TeacherService';
import '../TeacherList/TeacherList.css';

const TeachersList = () => {
    const [teachers, setTeachers] = useState([]);
	const navigate = useNavigate();

    useEffect(() => {
        const fetchTeachers = async () => {
            const response = await getTeachers();
            setTeachers(response.data);
        };
        fetchTeachers();
    }, []);

    const handleDelete = async (id) => {
        await deleteTeacher(id);
        setTeachers(teachers.filter(teacher => teacher.id !== id));
    };

    return (
        <div className="teachers-list">
            <h1>Teachers List</h1>
			<IconButton onClick={() => navigate('/')} color="primary" style={{display: "flex"}}>
			  <HomeIcon />
			</IconButton>
            <Link to="/add-teacher" className="add-teacher-button">Add Teacher</Link>
            <table className="teachers-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Subject</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {teachers.map(teacher => (
                        <tr key={teacher.id}>
                            <td>{teacher.id}</td>
                            <td>{teacher.name}</td>
                            <td>{teacher.subject.name}</td>
                            <td>
                                <Link to={`/edit-teacher/${teacher.id}`} className="edit-button">Edit</Link>
                                <button onClick={() => handleDelete(teacher.id)} className="delete-button">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TeachersList;
