import React from 'react'
import { Routes ,Route } from 'react-router-dom'
import Home from './pages/Home'
import Filter from './pages/Filter'
import ProductPage from './pages/ProductPage'
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/filter' element={<Filter/>} />
      {/* <Route path='/product' element={<ProductPage/>} /> */}
        <Route path="/product/:slug" element={<ProductPage />} />
    </Routes>
  )
}

export default App
