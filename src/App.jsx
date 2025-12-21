import React from "react"
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop"
import Navigation from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import AppRoutes from "./Routes/AppRoutes"
import './App.css'



function App() {


  return (

    <div className='App'>
      <ScrollToTop />
      <Navigation />
      <AppRoutes />
      <Footer />

    </div>

  )
}

export default App
