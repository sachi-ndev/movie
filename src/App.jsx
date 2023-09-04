// import { useState } from 'react'
import Navbar from "./components/navbar"
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import "./index.css"
import Home from "./components/pages/home"
import Carousaldiv from "./components/pages/carousal"
import Popular from "./components/popular"
import Inpop from "./components/pages/innerpage/inpop"
// import About from "./components/aboutmovie"
import MovieDetail from "./components/pages/indivitual/intmovie"

function App() {

  return (
    <div className="overflow-x-hidden ">
    
      <Router>
    <div className="">
      <Navbar/>
    </div>
      
      <Routes>

        <Route path="/" element={<Home/>}/>
        {/* <Route path="/second" element={<Carousaldiv/>}/> */}
        <Route path="/popular" element={<Inpop/>}/>
        {/* <Route path="/abt" element={<About/>}/> */}
        <Route path="/Details/:id" element={<MovieDetail/>}/>

        <Route />




        {/* <Route path="/favs"/> */}
        
       
      </Routes>
    </Router>
    </div>
  )
}

export default App
