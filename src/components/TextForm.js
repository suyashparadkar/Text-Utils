import React, { useState } from 'react'

export default function TextForm(props) {

   const handleUpClick = () => {
      console.log("Uppercase was clicked" + text);
      setText("You have clicked on handleUpClick");
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert('Converted to uppercase', 'success');
   }

   const handleLoClick = () => {
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert('Converted to lowercase', 'success');
   }

   const handleClClick = () => {
      let newText = "";
      setText(newText);
      props.showAlert('Cleared text', 'success');
   }

   const handleOnChange = (event) => {
      console.log("On change");
      setText(event.target.value);
   }

   const handleCopy = () => {
      var text = document.getElementById('myBox');
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert('Copied', 'success');
   }

   const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert('Removed extra spaces', 'success');
   }

   // React hooks i.e. useState let us use state and other react features without writing a class
   const [text, setText] = useState("");
   // text = "new text"; // Wrong way to change the state
   // setText("new text"); // Correct way to change the state
   return (
      <>
         <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
               <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={/*javascript*/{/*object*/backgroundColor: props.mode === 'dark' ? '#212529' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to uppercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to lowercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleClClick}>Clear</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
         </div>
         <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes read</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : 'Enter something in the text box above to preview it here'}</p>
         </div>
      </>
   )
}
