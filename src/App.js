import React from 'react'

import { About, Footer, Header, Skills, Testimonial, Work } from './container'
import { Navbar, DarkMode } from './components'

import "./App.scss"
const App = () => {
  return (
    <div className='app'>
        <Navbar />
        <DarkMode />
        <Header />
        <About />
        <Work />
        <Skills />
        <Footer />
    </div>
  )
}

export default App
