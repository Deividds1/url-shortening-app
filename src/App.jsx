import { useState } from 'react'
import Info from './components/info/Info'
import Footer from './components/footer/Footer'
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Input from './components/input/Input'
import Url from './components/url/url'

function App() {

  return (
    <>
      <Header />
      <Home />
      <Url/>
      <Info />
      <Footer />
    </>
  )
}

export default App
