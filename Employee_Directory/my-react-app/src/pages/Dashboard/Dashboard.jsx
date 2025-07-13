import React, { useContext } from 'react'
import './Dashboard.css'
import { useMyContext } from '../../context/contextApi'
import Card from '../../components/Card/Card'
const Dashboard = () => {
    const {sort, setSort, show, setShow, filterData, setIsAddClick, currentPage, setCurrentPage, totalPage, currentItems} = useMyContext()
    
    const handleChange = (e) => {
        setSort(e.target.value)
    }

    const handleShow = (e) => {
        setShow(e.target.value)
    }

    const handleAddClick = () => {
        setIsAddClick(true)
    }
  return (
    <>
        <div className='dashboard-container'>
            <div className='dashboard-header'>
                <div className='dashboard-header-left'>
                    <div className='sort'>
                        <label htmlFor="sort">Sort</label>
                        <select name="sort" value={sort} onChange={handleChange}>
                            <option value="default">Default</option>
                            <option value="first Name">First Name</option>
                            <option value="department">Department</option>
                        </select>
                    </div>
                    <div className='show'>
                        <label htmlFor="show">Show</label>
                        <select name="show" value={show} onChange={handleShow}>
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                        </select>
                    </div>
                </div>
                <div className='dashboard-header-right'>
                    <button className='Add-btn' onClick={handleAddClick}>Add Employee</button>
                </div>
            </div>
            <div className='dashboard-body'>
                {currentItems && currentItems.map((emp) => (
                    <Card key={emp.id} firstName={emp.firstName} lastName={emp.lastName} email={emp.email} department={emp.department} role={emp.role} id={emp.id}/>
                ))}
                <div className='pagination'>
                    <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
                    <span>{currentPage} of {totalPage}</span>
                    <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPage}>Next</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Dashboard