import { useState } from 'react'
import Info from './components/info/Info'
import Footer from './components/footer/Footer'
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Input from './components/input/Input'

function App() {

  return (
    <>
    <Header/>
    <Home/>
    <Input/>
      <Info></Info>
      <Footer></Footer>
    </>
  )
}

export default App
