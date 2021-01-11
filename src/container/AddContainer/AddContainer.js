import React from "react"
import "./AddContainer.css"
import AddStatusModal from "../../modals/AddStatusModal/AddStatusModal.js"
import AddStatusTypesModal from "../../modals/AddStatusTypesModal/AddStatusTypesModal.js"
import { render } from "react-dom"

function AddContainer(props) {
    const [visible, setVisible] = React.useState(false)
    const [typesVisible, setTypesVisible] = React.useState(false)
    function render1() {
        if(visible)
            return <AddStatusModal {...props} visible={visible} setVisible={setVisible} />
        else
            return null
    }

    function render2() {
        if(typesVisible)
            return <AddStatusTypesModal {...props} visible={typesVisible} setVisible={setTypesVisible} />
        else
            return null
    }

    return (
        <section className="add-container">
            <div className="add-card" onClick={() => setVisible(!visible)}>
                <div className="add-card-plus"><div>+</div></div>
                <h2 className="add-card-text">Add New Jur Status</h2>
            </div>
            <div className="add-card" onClick={() => setTypesVisible(!typesVisible)}>
            <div className="add-card-plus"><div>+</div></div>
                <h2 className="add-card-text">Add New Jur Status Type</h2>
            </div>
            {render1()}
            {render2()}
        </section>
    )
}

export default AddContainer