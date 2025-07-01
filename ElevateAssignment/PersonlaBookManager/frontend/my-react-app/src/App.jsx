import {Link, Route, Routes} from 'react-router-dom'
import './App.css'
import BookList from './pages/BookList/BookList'
import AddBook from './pages/AddBook/AddBook'
import BookDetail from './pages/BookDetail/BookDetail'

function App() {

  return (
    <>
      <div className='App'>
        <div>
          <h1>Personal Book Manager</h1>
          <div>
            <Link to='/addBook'>Add Book</Link>
            <Link to='/'>Back</Link>
          </div>
        </div>
        <Routes>
          <Route path='/' element={<BookList/>}/>
          <Route path='/addBook' element={<AddBook/>}/>
          <Route path='/book/:id' element={<BookDetail/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
