import { createContext, useContext, useEffect, useState } from "react";

const MyContext = createContext()

export const MyProvider = ({children}) => {
    const [data, setData] = useState([])
    const [filterData, setFilterData] = useState([])
    const [search, setSearch] = useState("")
    const [option,setOption] = useState(5)

    const [currentPage, setCurrentPage] = useState(1)
    const itemPerPage = option
    const indexOfLastItem = currentPage * itemPerPage
    const indexOfFirstItem = indexOfLastItem - itemPerPage
    const currentItems = filterData.slice(indexOfFirstItem, indexOfLastItem)

    const totalPage = Math.ceil(filterData.length / itemPerPage)


    async function fetchData(){
        try {
            const response = await fetch("https://fakestoreapi.com/products")
            const res = await response.json()
            setData(res)
            setFilterData(res)
        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(() => {
        setCurrentPage(1)
        const newTimeOutId = setTimeout(() => {
            const filter = data.filter((product) => product.title.toLowerCase().includes(search.toLowerCase()) || product.category.toLowerCase().includes(search.toLowerCase()))
            setFilterData(filter)
        },500)

        return () => clearTimeout(newTimeOutId)

    },[search,data])

    useEffect(() => {
        fetchData()
    },[])
    return (
        <>
            <MyContext.Provider value={{
                data,
                setData,
                filterData,
                setFilterData,
                search,
                setSearch,
                currentPage,
                setCurrentPage,
                indexOfLastItem,
                indexOfFirstItem,
                currentItems,
                totalPage,
                option,
                setOption
            }}>
                {children}
            </MyContext.Provider>
        </>
    )
}

export const useMyContext = () => {
    return useContext(MyContext)
}