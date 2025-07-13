import { createContext, useContext, useEffect, useState } from "react";
import useDebounce from "../hooks/debounce/Debounce";

const MyContext = createContext();

export const MyProvider = ({children}) => {
    const [user, setUser] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [search, setSearch] = useState("");
    const [isAddClick, setIsAddClick] = useState(false);
    const [show, setShow] = useState(5);
    const [filter, setFilter] = useState("default");
    const [sort, setSort] = useState("default");
    const [currentPage, setCurrentPage] = useState(1);
    const itemPerPage = show;
    const indexOfLastItem = currentPage * itemPerPage;
    const indexOfFirstItem = indexOfLastItem - itemPerPage;
    const currentItems = filterData.slice(indexOfFirstItem, indexOfLastItem);
    const totalPage = Math.ceil(filterData.length / itemPerPage);

    const debounceSearch  = useDebounce(search, 500);

    const handleAdd = async (userData) => {
        try {
            await fetch("http://localhost:3001/users",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });
            alert("User added successfully!");
            fetchData();
        } catch (error) {
            console.log(error.message);
        }
    };

    const handleDelete = async (id) => {
        try {
            await fetch(`http://localhost:3001/users/${id}`, {
                method: "DELETE"
            });
            alert("User deleted successfully!");
            fetchData(); 
        } catch (error) {
            alert("Failed to delete user: " + error.message);
            console.log(error.message);
        }
    };
    
    

    const handleEdit = async (id, userData) => {
        try {
            await fetch(`http://localhost:3001/users/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });
            fetchData();
        } catch (error) {
            console.log(error.message);
        }
    };
    

    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:3001/users");
            const data = await response.json();
            setUser(data);
            setFilterData(data); 
        } catch (error) {
            console.error(error.message);
        }
    };
    

    useEffect(() => {

        const filtered = user.filter((userItem) => {
            const matchesSearch = debounceSearch ? 
                userItem.firstName.toLowerCase().includes(search.toLowerCase()) || userItem.lastName.toLowerCase().includes(search.toLowerCase()) ||
                userItem.email.toLowerCase().includes(search.toLowerCase()) : true;

            const matchesFilter = filter === "default" || 
                (filter === "first Name" && userItem.firstName.toLowerCase().includes(search.toLowerCase())) ||
                (filter === "department" && userItem.department.toLowerCase().includes(search.toLowerCase())) ||
                (filter === "Role" && userItem.role.toLowerCase().includes(search.toLowerCase()));

            return matchesSearch && matchesFilter;
        });

        const sorted = filtered.sort((a, b) => {
            if (sort === "default") return 0;
            if (sort === "first Name") return a.firstName.localeCompare(b.firstName);
            if (sort === "department") return a.department.localeCompare(b.department);
            return 0;
        });

        setFilterData(sorted);
    }, [debounceSearch, filter, user, sort]);

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <MyContext.Provider value={{
            isAddClick, 
            setIsAddClick, 
            handleAdd, 
            user, 
            filterData, 
            setFilterData, 
            search, 
            setSearch,
            show,
            setShow,
            filter,
            setFilter,
            sort,
            setSort,
            handleDelete,
            handleEdit,
            currentPage,
            setCurrentPage,
            itemPerPage,
            indexOfFirstItem,
            indexOfLastItem,
            currentItems,
            totalPage
        }}>
            {children}
        </MyContext.Provider>
    );
};

export const useMyContext = () => {
    return useContext(MyContext);
};
