import React,{useState} from 'react';

export default function Textform(props) {
    const handleUpClick = () =>{
        console.log("uppercase was clicked" + text);
        let newText = text.toLocaleUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case","succes");

    } 
    const handleloClick = () =>{
      console.log("Lowerercase was clicked" + text)
      let newT=text.toLocaleLowerCase();
      setText(newT);
      props.showAlert("Converted to lower case","success");
    }
    const handleOnCopy = () =>{
      console.log("Copied");
      var text=document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      document.getSelection().removeAllRanges();
      props.showAlert("Copied");

    }
    const handleloClear = ()=>{
      console.log("cleared")
      let textClear =text.at(' ');
      setText(textClear);
      props.showAlert("Text Cleared","success");
    
    }
    const handleOnChange = (event) =>{
        console.log("Onchange");
       setText(event.target.value);
    }
    const [text,setText]=useState ("Enter text here")
  return (
    <>
    <div className="container" style={{Color: props.mode==='dark'?'white':'black'}}>
        <h1 className='mb-2 '>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#ced4da':'white', color: props.mode==='dark'?'white':'black'}} value={text} id="myBox" rows="8"></textarea>
            </div>
        
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert To Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleloClick}>Convert To Lowerercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"  onClick={handleloClear}>Clear</button>
        <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1"  onClick={handleOnCopy}>Copy</button>
        </div>
        <div className="container my-3" style= {{Color: props.mode==='dark'?'black':'white'}}>
        <h1 className=''>Your text summary</h1>
        <p>{text.split(" ").filter((Element)=>{return Element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008*60*text.split(" ").filter((Element)=>{return Element.length!==0}).length} seconds read</p>
        </div>
        <p>{text.length>0?text:"Enter something to preview it"}</p>
    </>
    
  )
}
 