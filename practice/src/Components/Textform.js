import React, { useState } from 'react'; // to use states, have to impot use state from hooks 
import PropTypes from 'prop-types'
export default function Textform(props) {
    const [text, setText] = useState('Enter your text'); // to use states,copy from react docs

    const HandleOnChange = (event)=>{
        console.log("handle on change");
        setText(event.target.value);
    }

    const HandleUpClick = ()=>{
        console.log("Uppercase Clicked");
        let newText = text.toUpperCase(); // calling our state which is text 
        setText(newText); //we want to update this state, 'text' is current state and 'setText' is updated state so we want updated state which is our setText to be newText
    }

    const HandlcClearClick = ()=>{
      let newText = ' ';
      setText(newText);
    }
  return (
    <div>
    {/* code for text area from bootstrap */}
    
<div className="container" style = {{color:props.mode==='dark'? 'white':'black'}}>
    <h1 className='my-3'>{props.heading }</h1>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" value = {text} onChange={HandleOnChange} style = {{color:props.mode==='dark'? 'white':'black', backgroundColor:props.mode ==='dark'? 'black': 'white'}}></textarea>
  <button className="btn btn-primary my-3" type="button" onClick={HandleUpClick}>Upper Case</button>
  <button className="btn btn-primary my-3 mx-3" type="button" onClick={HandlcClearClick}>Clear</button>
</div>
    
    </div>
  )
}
