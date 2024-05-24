import { useState } from 'react'
import Navbar


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
      <div className="container">
        <div className="bg-red-600">
          hey i am red
        </div>
      </div>
    </>
  )
}

export default App
