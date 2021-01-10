import "./Spinner.css"

function Spinner({visible}) {
    if(visible)
    return (
        <div className="spinner-main">
            <div className="spinner">
                <div className="spinner-item"></div>
                <div className="spinner-item"></div>
                <div className="spinner-item"></div>
            </div>
        </div>
    )
    else
        return null
}

export default Spinner