import React , {useEffect} from 'react'


const Navbar = ({color}) => {
 //case:1 Run on every render
 useEffect(() => {
    alert('hey I will run on every render')
  })
 
  //case:2 Run on only first render
  useEffect(() => {
    alert('Hey welcome to my page, This is the first render')
  }, [])

  //case 3 Run only when certain values change first render
  useEffect(() => {
    alert('Hey i am running because color was changed')
  }, [color])

  //Example of cleaning function 
  useEffect(() => {
   alert("hey welcome to my page .This is the first render of app.jsx")
  
    return () => {
      alert("componet was unmounted")
    }
  }, [])
  
    
  return (
    <div>
      I am navbar of {color} color hehe...
    </div>
  )
}

export default Navbar
