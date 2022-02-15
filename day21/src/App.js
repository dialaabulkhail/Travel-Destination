import React from 'react'
import Home from './Components/home/Home';
import TourDetails from "../src/Components/TourDetails/TourDetails";
import {Routes, Route} from "react-router-dom";

const App = () => {
  return (
  <>
    <Routes>
    <Route path="/"element = {<Home/>}/>
    <Route path="/tour/:id"element = {<TourDetails/>}/>
  </Routes> 
  </>
  
  )
}

export default App