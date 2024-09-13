import React, { useEffect, useState } from 'react';
import ClassService from '../../services/ClassService';
import { Link, useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import './ClassList.css'; 

function ClassList() {
    const [classes, setClasses] = useState([]);
	const navigate = useNavigate();

    useEffect(() => {
        ClassService.getClasses().then((response) => {
            setClasses(response.data);
        });
    }, []);

    const deleteClass = (id) => {
       
        ClassService.deleteClass(id).then(() => {
            setClasses(classes.filter((cls) => cls.id !== id));
        });
        
    };

    return (
        <div className="class-list-container">
            <h2>Class List</h2>
			<IconButton onClick={() => navigate('/')} color="primary" style={{display: "flex"}}>
			  <HomeIcon />
			</IconButton>
            <Link to="/add-class" className="add-button">Add Class</Link>
            <table className="class-list-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Grade</th>
                        <th>Section</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {classes.map((cls) => (
                        <tr key={cls.id}>
                            <td>{cls.id}</td>
                            <td>{cls.name}</td>
                            <td>{cls.grade}</td>
                            <td>{cls.section}</td>
                            <td>
                                <Link to={`/edit-class/${cls.id}`} className="edit-button">Edit</Link>
                                <button className="delete-button" onClick={() => deleteClass(cls.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ClassList;
