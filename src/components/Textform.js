import React, {useState} from 'react'
import PropTypes from 'prop-types';

export default function Textform(props) {
    const handleUpClick = () =>{
        
        let newText = text.toUpperCase();
        setText(newText);
    }
    
    const handleLoClick = () =>{
        
        let newText = text.toLocaleLowerCase();
        setText(newText);
    }



    const handleOnChange = (event) =>{
            
           setText(event.target.value);
    }

    const [text, setText] = useState('');
    return (
        <>
            <div className= "container">
            <h1>{props.heading}</h1>           
            <div className="mb-3">
            <textarea className="form-control"  value = {text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            
            </div>
            <button className="btn btn-primary mx-2" onClick= {handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick= {handleOnChange}>Clear</button>
            <button className="btn btn-primary mx-2" onClick= {handleLoClick}>Convert to Lowercase</button>
            
            <div className="container my-2">
            <h2>Your text Summary my-2</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p> 
            <p> {0.008 * text.split(" ").length} no of Minutes to read</p> 
            <h2>Preview</h2>
            <p>{text}</p> 
            </div>
            </div>
            
        </>        )
                }
