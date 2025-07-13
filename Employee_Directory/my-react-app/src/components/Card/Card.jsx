import React, { useState } from 'react';
import "./Card.css";
import { useMyContext } from '../../context/contextApi';

const Card = ({ firstName, lastName, email, department, role, id }) => {
    const { handleDelete, handleEdit } = useMyContext();
    const [isEditing, setIsEditing] = useState(false);
    const [editableData, setEditableData] = useState({ firstName, lastName, email, department, role });

    const handleDeleteClick = () => {
        handleDelete(id);  
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleChange = (e) => {
        setEditableData({
            ...editableData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleEdit(id, editableData);
        setIsEditing(false);
    };

    return (
        <div className='card'>
            {isEditing ? (
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        name="firstName" 
                        value={editableData.firstName} 
                        onChange={handleChange} 
                    />
                    <input 
                        type="text" 
                        name="lastName" 
                        value={editableData.lastName} 
                        onChange={handleChange} 
                    />
                    <input 
                        type="email" 
                        name="email" 
                        value={editableData.email} 
                        onChange={handleChange} 
                    />
                    <input 
                        type="text" 
                        name="department" 
                        value={editableData.department} 
                        onChange={handleChange} 
                    />
                    <input 
                        type="text" 
                        name="role" 
                        value={editableData.role} 
                        onChange={handleChange} 
                    />
                    <button type="submit">Save</button>
                    <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
                </form>
            ) : (
                <>
                    <strong>Name: {firstName} {lastName}</strong>
                    <div><strong>Email: </strong><p>{email}</p></div>
                    <div><strong>Department: </strong><p>{department}</p></div>
                    <div><strong>Role: </strong><p>{role}</p></div>
                    <div className='card-buttons'>
                        <button onClick={handleEditClick}>Edit</button>
                        <button onClick={handleDeleteClick}>Delete</button>  
                    </div>
                </>
            )}
        </div>
    );
};

export default Card;
