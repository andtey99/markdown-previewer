import React from "react";
import StateString from "./UI/stateString";
import "../styles/outputTextArea.css";
import DOMPurify from "dompurify";
import { marked } from "marked";

const OutputTextArea = ({
    wetMarkdown,
    btnState,
    setBtnState,
    children
}) => {


    return <div className="output">
        <StateString btnState={btnState} setBtnState={setBtnState}>{children}</StateString>
        <div dangerouslySetInnerHTML={{__html: marked.parse(wetMarkdown)}} className="outputArea"></div>
        
    </div>
}

export default OutputTextArea;