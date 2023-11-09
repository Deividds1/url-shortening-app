import { useState } from 'react'
import Info from './components/info/Info'
import Footer from './components/footer/Footer'
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'

function App() {

  return (
    <>
    <Header/>
    <Home/>
      <Info></Info>
      <Footer></Footer>
    </>
  )
}

export default App
