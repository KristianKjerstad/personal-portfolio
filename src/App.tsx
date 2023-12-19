import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Header } from './components/Header'
// import viteLogo from '/vite.svg'
import "./App.css"
import { SectionDivider } from './components/SectionDivider'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="p-4">
        <Header />
      <h3 className="text-3xl pb-2 color-yellow">
      Hello, I'm
    </h3>

    <h1 className="text-8xl pb-4 font-semibold">
      Kristian Kjerstad
    </h1>
    <h2 className="text-4xl pb-4 opacity-70">Web developer</h2>
    <button>Contact</button>
    <SectionDivider title='About me' />
    </div>  )
}

export default App
