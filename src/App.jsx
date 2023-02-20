
import './App.css'
import { NavBar } from './Components/NavBar/NavBar'
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer'
// import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailsContainer from './Components/ItemDetailsContainer/ItemDetailsContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CartContainer } from './Components/CartContainer/CartContainer'





function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
          <Routes>
              <Route path='/' element={<ItemListContainer/>} />
              <Route path='/categoria/:idCategoria' element={<ItemListContainer/>} />
              <Route path='/cart' element={<CartContainer/>} />
          </Routes> 
      </BrowserRouter>
    </div>
  )
}

export default App
