import logo from './logo.svg';
import {useState} from 'react';
import "./App.css"
import navbar from './components/navbar';
import Footer from './components/Footer';


function App() {
  const [value, setValue] = useState(0) // which we can change is known as state
  return (
    <div className="App">
      <navbar/>
     <div className='value'> {value}</div>
     <button onClick={()=>{setValue(value + 1)}}>Click me</button>
       
     <Footer logoText="Tushar Baranwal"/>
    </div>
  );
}

export default App;
