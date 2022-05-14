import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import {
//    BrowserRouter as Router,
//    Routes,
//    Route,
// } from "react-router-dom";

function App() {
   const [mode, setMode] = useState('light');
   // Whether dark mode is enabled or not

   const [alert, setAlert] = useState(null);

   const showAlert = (message, type) => {
      // It will take message and type of alert
      setAlert({
         msg: message,
         type: type
      })
      setTimeout(() => {
         setAlert(null);
      }, 1500);
   }

   const toggleMode = () => {
      if (mode === 'light') {
         setMode('dark');
         document.body.style.backgroundColor = '#343a40';
         showAlert('Dark mode has been enabled', 'success');
         document.title = 'TextUtils - Dark Mode';
      }
      else {
         setMode('light');
         document.body.style.backgroundColor = 'white';
         showAlert('Light mode has been enabled', 'success');
         document.title = 'TextUtils - Light Mode';
      }
   }

   return (
      <>
         {/* <Router> */}
         <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
         <Alert alert={alert} />
         <div className="container my-3">
            {/* <Routes> */}
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/"
               element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} /> */}
            <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
            {/* </Routes> */}
         </div>
         {/* </Router> */}
      </>
   );
}

export default App;
