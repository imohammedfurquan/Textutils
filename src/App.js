import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alertmsg from './Components/Alertmsg';
import About from './Components/About';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleButton = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode has been enabled', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleButton={toggleButton} showAlert={showAlert} />
        <Alertmsg alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About  mode={mode} />} />
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter your text here" mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
