import "./JurStatusTypes.css"
import React from "react"

function JurStatusTypes({ jurStatusTypes, onClickHandler = null, highlightIndex=null }) {
    const highColor = {
        bgColor:"blueviolet",
        color: "white",
    }

    function clHandler() {
        onClickHandler()
    }

    return (
        <div className="jurstatustypes-card" style={highlightIndex ? { backgroundColor: highColor.bgColor, color: highColor.color } : null} onClick={clHandler}>
            {jurStatusTypes}
        </div>
    )
}

export default JurStatusTypes