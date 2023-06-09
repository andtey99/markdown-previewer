import React from "react";
import "../../styles/stateString.css";
import { SlSizeActual, SlSizeFullscreen } from "react-icons/sl"

const StateString = ({
    btnState,
    setBtnState,
    children
}) => {
    return <div className="header">
                <span>{children}</span>
                <button className="inputBtn" onClick={() => setBtnState(btnState ? false : true)}>{btnState ? <SlSizeActual /> : <SlSizeFullscreen />}</button>
            </div>
}

export default StateString;