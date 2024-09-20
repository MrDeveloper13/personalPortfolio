import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About.jsx'
import Services from './Components/Services/Services.jsx'
import MyWork from './Components/myWork/MyWork.jsx'
import Contact   from './Components/Contact/Contact.jsx'
import Footer from './Components/Footer/Footer.jsx'
function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <MyWork/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
