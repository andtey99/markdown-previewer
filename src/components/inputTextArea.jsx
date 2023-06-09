import React from "react";
import StateString from "./UI/stateString";
import "../styles/inputTextArea.css"

const InputTextArea = ( {text, setText, btnState, setBtnState, children} ) => {
    return <div className="input">
                <StateString btnState={btnState} setBtnState={setBtnState}>{children}</StateString>
                <textarea value={text} className={"inputArea " + (btnState ? "fullscreen" : "")} onChange={(e) => setText(e.target.value)}></textarea>
            </div>
}

export default InputTextArea;