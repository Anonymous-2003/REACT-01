import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'; // importing navbar
import Textform from './Components/Textform';
import About from './Components/About';
import {useState} from 'react';

let name = 'Avishek';
function App() {

  const[mode,setMode] = useState('light');

  const toggleMode = ()=>{
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black'; // changing the whole body into grey
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>

    {/* Putting Navbar from component*/}
      <Navbar mode = {mode} toggleMode = {toggleMode} title = 'Practice Project' aboutText = 'About Us'/> 
      <Textform mode = {mode} heading = 'Text Area'/>
      <About/>
      <div>
        <p>lorem ipsum aoierfja ajsoerij ashkjnv ajorjq nmdfjhaoa woejr </p>
        <h1>Hey, I'm {name}</h1>
      </div>
    </>
  );
}

export default App;
