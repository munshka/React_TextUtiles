import React, {useState} from 'react'


export default function TextForm(props) {
  const handleOnChange =(event)=>{
    console.log("On change"+event.target.value);
    setText(event.target.value);
    }

  const handleUpClick =(event)=>{
        console.log("UpperCase was Clicked!" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success");
    }
   const handleLoClick =(event)=>{
        console.log("Lowercase was Clicked!" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success");
    }
  const handleClrClick =(event)=>{
      console.log("Lowercase was Clicked!" + text);
      let newText = "";
      setText(newText);
      props.showAlert("Text Cleared","success");
  }
  const handleCopyClick =(event)=>{
    console.log("Text Copied!");
    var text =document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard","success");
  }


  const [text, setText] = useState("Enter text here"); //hooks
  // Calculate word and character counts
  const wordCount = text.trim().length > 0 ? text.trim().split(/\s+/).length : 0;
  const charCount = text.trim().length;

  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'#1c1c29'}}>
        <h3 className='mx-2 my-2'>{props.heading}</h3>
        <div className="mb-3">
            <textarea className="form-control"  value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white' , color:props.mode==='dark'?'white':'#1c1c29'}} onChange={handleOnChange} id="myBox" rows="5"></textarea>
        </div>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-2' onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-2' onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-2' onClick={handleClrClick}>Clear</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-2' onClick={handleCopyClick}>Copy</button>
        
    </div>
    <div className='container' style={{color:props.mode==='dark'?'white':'#1c1c29'}}>
          <h3>Your text summary</h3>
          <p>{wordCount} words and {charCount} characters</p>
          <p>{0.008 * wordCount} minutes to read</p>
          <h3>Preview</h3>
          <p>{charCount > 0 ? text : "Write Something to Preview!"}</p>
    </div>
</>
    
  )
}
