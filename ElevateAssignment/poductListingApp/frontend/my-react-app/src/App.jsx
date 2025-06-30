
import { useEffect, useState } from 'react'
import './App.css'
import { useMyContext } from './context/Mycontext'

function App() {
  const {search, setSearch, currentItems, setCurrentPage, totalPage, currentPage, option, setOption} = useMyContext()

  

  
  const handleChange = (e) => {

    setSearch(e.target.value)
  }

  const handleSelect = (e) => {
    if(e.target.value === "All"){
      setOption(5)
    }else{
      setOption(e.target.value)
    }
  }

  
  return (
    <>
      <div className='search'>
        <input type="text" onChange={handleChange} value={search} placeholder='Search By name or category'/>
      </div>
      <div className='options' onChange={handleSelect}>
        <select>
          <option value={"All"}>All</option>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
        </select>
      </div>
      <div className='card-container'>
        {currentItems && currentItems.map(item => (
          <div key={item.id}>
            <div className='image-container'>
              <img src={item.image} alt="" />
            </div>
            <div className='details'>
              <p>Name : {item?.title}</p>
              <p>Category :{item?.category}</p>
              <p>Price : {item?.price}</p>
              <p>description : {item?.description}</p>
              <p>Rating : {item?.rating?.rate}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='pagination'>
        <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
        <p>Page {currentPage} of {totalPage}</p>
        <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPage}>Next</button>
      </div>
    </>
  )
}

export default App
