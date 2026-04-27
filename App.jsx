import Header from './assets/components/Header'
import { Outlet } from 'react-router-dom'
import './App.css'
import { useState } from 'react'

const App = ()=>{
    const [isdark,setIsdark] = useState(JSON.parse(localStorage.getItem('isdarkMode')))
    return (
    <>
        <Header theme={[isdark,setIsdark]}/>   
        <Outlet context={[isdark,setIsdark]}/>
    </>
)
}

export default App