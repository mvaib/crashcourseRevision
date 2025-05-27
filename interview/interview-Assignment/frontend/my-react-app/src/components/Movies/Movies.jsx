import "./movies.css"
import React, { useEffect, useState } from 'react'

const Movies = () => {
    const [data, setData] = useState([])
    const [filterData, setFilterData] = useState([])
    const [searchValue, setSearchValue] = useState("")
    const [timeOutId, setTimeOutId] = useState(null)

    const handleSearch = (e) => {
        const search = e.target.value
        setSearchValue(search)

        if(timeOutId){
            clearTimeout(timeOutId)
        }

        const newTimeOutId = setTimeout(() => {
            const filter = data.filter((movie) => movie.name.toLowerCase().includes(search.toLowerCase()) || movie.language.toLowerCase().includes(search.toLowerCase()) || movie.genre.toLowerCase().includes(search.toLowerCase()))
            setFilterData(filter)
        },500)
        
        setTimeOutId(newTimeOutId)
    }
    async function fetchData(){
        try {
            let response = await fetch(`https://interview-ass-movie-listing.onrender.com/movie/get`)
            let res = await response.json()
            let finalData = res?.movies
            setData(finalData)
            setFilterData(finalData)
        } catch (error) {
            console.log(error.message)
        }
    }
    useEffect(() => {
        fetchData()
    },[])
  return (
    <div className='container'>
    <div className='search'>
        <input type='text' placeholder="Movie name, language or genre" onChange={handleSearch} value={searchValue}/>
    </div>
    <div className="card-container">
        { filterData.length === 0 ? <h1>no data found</h1> : filterData.map((movie,i) => (
            <div className='movie-card' key={i}>
                <div className='image'>
                    <img src={movie.image} alt="" />
                </div>
                <p>name : {movie.name}</p>
                <p>language : {movie.language}</p>
                <p>genre : {movie.genre}</p>
                <p>rating : {movie.rating}</p>
            </div>
        ))}
    </div>
    </div>
  )
}

export default Movies