
import '../styles/App.css';
import React, { useState } from 'react';

export default function App() {
 const [ inputValue, setInputValue]=useState([]);
//  const [ inputValue2, setInputValue2]=useState("");
  
 const changeInput = (e)=>{
     setInputValue(e.target.value);
 }
 const buttonClick = ()=>{
  
  setInputValue([...inputValue, inputValue]);
  
 }
  
 //code here 

 
  return (
    <div>
  <input id='input' value={inputValue} onChange={changeInput} />
  
      <p id='intro'>Concated String</p>
      <p id='text'>{inputValue} </p>
      <button id='button' onClick={buttonClick}>
        Click me
      </button>
    </div>
  );
}
