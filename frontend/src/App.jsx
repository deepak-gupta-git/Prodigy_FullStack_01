import { useState } from 'react'
import './App.css'
import Login from './Components/Login'
import Signup from './Components/Signup'
import { Route,Routes } from 'react-router-dom'
import Home from './Components/Home'
import Welcome from './Components/Welcome'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/welcome' element={<Welcome/>}/>
    </Routes>
    </>
  )
}

export default App
