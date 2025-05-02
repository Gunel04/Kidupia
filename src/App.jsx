import React, { useState } from 'react'
import Header from './layout/Header'
import FirstSliderComponent from './layout/FirstSliderComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './layout/Footer'
import Products from './shopping/Products'
import ShopPage from './shopping/ShopPage'
import MoreDetails from './shopping/MoreDetails'
import Login from './pages/Login'
import Cart from './shopping/Cart'
import Contact from './pages/Contact'

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('mode'));

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
    if(theme === "light") {
      localStorage.setItem('mode', 'dark');
    }
    else {
      localStorage.setItem('mode', 'light');
    }
  }
  return (
    <div id={theme} >
      <BrowserRouter >
        <Header modeFunction={toggleTheme} theme={theme}/>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/shop' element={<ShopPage />}></Route>
          <Route path='/shop/:slug' element={<MoreDetails />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App