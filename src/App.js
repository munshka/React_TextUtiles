// import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React , {useState} from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  const showBlink = () => {
    setTimeout(() => {
      document.title = 'Get Utiles Now!';
    }, 3000);
    setTimeout(() => {
      document.title = 'Amazing Tools';
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode("dark");
      document.body.style.backgroundColor = '#1c1c29';
      showAlert("Dark Mode enabled", "success");
      showBlink();
      document.title = 'TextUtiles - Dark';
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode enabled", "success");
      showBlink();
      document.title = 'TextUtiles - Light';
    }
  }

  return (
    <Router>
      <div>
      <Navbar title="TextUtiles" aboutText='About' mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}></Alert>


        {/* Use Routes instead of Switch */}
        <Routes>
          <Route exact path="/about" element={<About mode={mode} />} />
          <Route exact path="/" element={<TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
