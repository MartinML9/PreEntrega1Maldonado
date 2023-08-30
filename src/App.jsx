// import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from "./components/ItemList/ItemListContainer";
import ItemDetailsContainer from './components/ItemDetails/ItemDetailsContainer';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={
          <div>
            <h1 className="ms-5">Inicio</h1>
            <ItemListContainer/>
          </div>}/>
        <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
        <Route path="/item/:id" element={<ItemDetailsContainer/>}/>
        <Route path="*" element={<h2>Error 404: Page not found</h2>}/>
      </Routes>
    </>
  )
}

export default App
