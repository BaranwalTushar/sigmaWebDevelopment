import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setshowbtn] = useState(true)
  const [todos, setTodos] = useState([
    {
      title: "Hey",
      desc: "I am a good todo"
    },

    {
      title: "Hey another todo",
      desc: "I am a good todo"
    },

    {
      title: "Hi",
      desc: "I am a good todo ....."
    },


  ])

  // const Todo  = ({todo})=>{return(

  //   <>
  //   <div className="m-4 border-1">

  //   <div className="todo">{todo.title}</div>
  //   <div className="todo">{todo.desc}</div>

  //   </div>



  // </>)}

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setshowbtn(!showbtn)}>
          Toggle show btn
        </button>


        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        {/* {showbtn?<button>i will shown  when second buttton will clicked</button>:" "} */}
        {/* {showbtn && <button>i will shown  when second buttton will clicked</button>} */}

        {showbtn ? <button>showbtn is true</button> : <button>showbtn is false</button>}
        {todos.map(todo => {
          // return <Todo key={todo.title} todo={todo}/>
         return  <div key={todo.title} className="m-4 border-1">

            <div className="todo">{todo.title}</div>
            <div className="todo">{todo.desc}</div>

          </div>

        })}

      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
