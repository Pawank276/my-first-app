import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const [btnText, setBtnText] = useState('Dark Mode')
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#111315';
      showAlert("Dark Mode activated", "success")
      setBtnText("Light Mode")
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode activated", "success")
      setBtnText("Dark Mode")
    }
  }

  return (
    <>
      <Navbar title="TextUtlis" mode={mode} toggleMode={toggleMode} btnText={btnText} />
      <div className="container">
        <Alert alert={alert} />
        <TextForm Heading="Enter the text below" mode={mode} showAlert={showAlert} />
      </div>
    </>
  );
}

export default App;

