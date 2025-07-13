
import { useState } from 'react'
import { useMyContext } from '../../context/contextApi'
import './Header.css'
const Header = () => {
    const {search, setSearch} = useMyContext()
    const {filter, setFilter} = useMyContext()

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const handleFilter = (e) => {
        setFilter(e.target.value)
    }

  return (
    <>
        <div className='header'>
            <nav>
                <h1>Employee Directory</h1>
                <div className='search'>
                    <input type="text" placeholder='Search...' value={search} onChange={handleChange}/>
                </div>
                <select name='filter' onChange={handleFilter} value={filter}>
                    <option value="default">All</option>
                    <option value="first Name">First Name</option>
                    <option value="department">Department</option>
                    <option value="Role">Role</option>
                </select>
            </nav>
        </div>
    </>
  )
}

export default Header