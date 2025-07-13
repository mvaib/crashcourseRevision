import React, { useState } from 'react'
import './MyForm.css'
import { useMyContext } from '../../context/contextApi'
const MyForm = () => {
    const {setIsAddClick, handleAdd} = useMyContext()
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        department: "default",
        role: "default",
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!formData.firstName || !formData.lastName || !formData.email || !formData.department || !formData.role){
            alert("Please fill all the fields")
            return
        }
        const userData = {
            firstName : formData.firstName,
            lastName : formData.lastName,
            email : formData.email,
            department : formData.department,
            role : formData.role,
        }
        handleAdd(userData)
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            department: "",
            role: "",
        })

    }

    const handleCancel = () => {
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            department: "",
            role: "",
        })
        setIsAddClick(false)
    }

  return (
    <div className='form-overlay'>
        <form onSubmit={handleSubmit}>
            <br />
            <div>
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName" id="" value={formData.firstName} onChange={handleChange}/>
            </div>
            <br />
            <div>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName" id="" value={formData.lastName} onChange={handleChange}/>
            </div>
            <br />
            <div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" value={formData.email} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="department">Department</label>
                    <select name="department" value={formData.department} onChange={handleChange}>
                        <option value="default"></option>
                        <option value="hr">HR</option>
                        <option value="it">IT</option>
                        <option value="finance">Finance</option>
                    </select>
                </div>
            </div>
            <br />
            <div>
                <label htmlFor="role">Role</label>
                <select name="role" id="" value={formData.role} onChange={handleChange}>
                    <option value="default"></option>
                    <option value="deverloper">Developer</option>
                    <option value="analyst">Analyst</option>
                    <option value="manager">Manager</option>
                    <option value="admin">Admin</option>
                    <option value="other"></option>
                </select>
            </div>
            <br />
            <div className='form-buttons'>
                <div className='cancel-btn' onClick={handleCancel}>Cancel</div>
                <button className='submit-btn' type='submit'>Add</button>
            </div>
        </form>
    </div>
  )
}

export default MyForm