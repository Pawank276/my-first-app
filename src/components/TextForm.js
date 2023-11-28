import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        if (text !== "") {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success")
        }
    }
    const handleLowClick = () => {
        if (text !== "") {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success")
        }
    }
    const handleClearClick = () => {
        if (text !== "") {
            let newText = "";
            setText(newText);
            props.showAlert("Text is cleared", "success")
        }
    }
    const handleTextChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    return (
        <>
            <div className="mt-5 mb-3">
                <h1 className={`text-${props.mode === 'light' ? 'black' : 'white'} mb-2`}>{props.Heading}</h1>
                <textarea className="form-control mb-3 fs-4" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#111315', color: props.mode === 'light' ? 'black' : 'white' }} value={text} onChange={handleTextChange} id="myText" rows="9"></textarea>
                <button className="btn btn-primary me-2 mb-1" onClick={handleUpClick}>Text To Uppercase</button>
                <button className="btn btn-success me-2 mb-1" onClick={handleLowClick}>Text To Lowercase</button>
                <button className="btn btn-danger" onClick={handleClearClick}>Clear</button>
            </div>
            <h2 className={`text-${props.mode === 'light' ? 'black' : 'light'} fw-bold bg-success p-2 text-center rounded`}>{text.split(" ").filter((e)=>{return e.length!==0}).length} Words And {text.length} Characters</h2>
        </>
    )
}
