import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { Meteors } from './components/ui/meteors'
import Home from "./components/Home"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <Meteors/> */}
      <Home/>

    </div>
  )
}

export default App
