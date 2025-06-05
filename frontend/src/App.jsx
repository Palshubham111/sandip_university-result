import  {Routes, Route } from "react-router-dom"
import './App.css'
import Home from "./components/Home"
import Resultss from "./Resultss/Resultss"
import Result from "./components/Result"
import Signup from "./components/Signup"




function App() {
  
  return (
    <>
     <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/results" element={<Resultss/>}/>
     <Route path="/result/:prn" element={<Result/>}/>
     <Route path="/Signup" element={<Signup/>}/>
     
     
     

     </Routes>
     
    </>
  )
}

export default App
