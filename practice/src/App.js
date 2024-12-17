import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'; // importing navbar
import Textform from './Components/Textform';
import About from './Components/About';
import {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

let name = 'Avishek';
function App() {

  const[mode,setMode] = useState('light');

  const toggleMode = ()=>{
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black'; // changing the whole body into black
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
    <Router>
    <Navbar mode = {mode} toggleMode = {toggleMode} title = 'Home' aboutText = 'About'/> 
    <div className='container my-3'>
      <switch>
        <Route exact path = '/'> {/* '/' means your default page, whenever you run your react application, the default page that shows up on your screen or any user */}
             <Textform mode = {mode} heading = 'Text Area'/>
        </Route>  

        <Route exact path = "/about">
          <About/>
        </Route>

        
      </switch>
    </div>
    </Router>

    
    </>
  );
}

export default App;
