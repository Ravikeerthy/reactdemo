import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Practice from './components/Practice'

function App() {
 
const names = ["Keerthana", "Ravi", "Keerthi", "Bharathi","Yaswathi","Mahathi","Karthi" ]
  return (
    <>
    {/* <Practice /> */}
    {
    names.map(name => <Practice name={name} />)}
    </>
  )
}

export default App
