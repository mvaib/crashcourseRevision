
import './App.css'
import Footer from './components/Footer/Footer'
import MyForm from './components/Form/MyForm'
import Header from './components/Header/Header'
import { useMyContext } from './context/contextApi'
import Dashboard from './pages/Dashboard/Dashboard'

function App() {
  const {isAddClick} = useMyContext()
  return (
    <>
      <Header/>
      {isAddClick && <MyForm/>}
      <Dashboard/>
      <Footer/>
    </>
  )
}

export default App
