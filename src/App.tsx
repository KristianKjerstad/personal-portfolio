import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Header } from './components/Header'
// import viteLogo from '/vite.svg'
import "./App.css"
import { SectionDivider } from './components/SectionDivider'
import { AboutMe } from './components/AboutMe'
import TextShpere from './components/TextSphere'

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
    <AboutMe />
    <SectionDivider title='Skills' />
    <TextShpere />
    <p className='opacity-60 text-center pt-8'>Copyright @ {new Date().getFullYear()}. Design by Kristian Kjerstad</p>
    </div>  )
}

export default App
