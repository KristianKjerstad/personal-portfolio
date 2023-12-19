import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Header } from './components/Header'
// import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (

      <div className="p-4">
        <Header />
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </div>  )
}

export default App
