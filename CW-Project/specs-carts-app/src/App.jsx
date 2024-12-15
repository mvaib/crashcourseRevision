
import './App.css'
import { Button } from "@/components/ui/button"
import { Container, HStack } from "@chakra-ui/react"
import { Routes, Route,  } from 'react-router-dom'
import Home from './appComponents/home/home'
import Nav from './appComponents/nav'
import Cart from './appComponents/home/cart'
import Track from './appComponents/track'
import WishList from './appComponents/wishList'
import Product from './appComponents/product/product'
function App() {

  return (
    <>
      <Container maxWidth={"120rem"} className="container" >
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/track-order' element={<Track/>}/>
          <Route path='/wishList' element={<WishList/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='*' element={<h1>404 Not found</h1>}/>
        </Routes>
      </Container>
    </>
  )
}

export default App
