import AddContainer from "./AddContainer/AddContainer.js"
import JurContainer from "./JurContainer/JurContainer.js"

function Main(props) {
    return (
        <div className="main">
            <AddContainer {...props} />
            <JurContainer {...props} />
        </div>
    )
}

export default Main