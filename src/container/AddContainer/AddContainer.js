import "./AddContainer.css"
import AddStatusModal from "../../modals/AddStatusModal/AddStatusModal.js"
import React from "react"

function AddContainer(props) {
    const [visible, setVisible] = React.useState(false)

    return (
        <section className="add-container">
            <div className="add-card" onClick={() => setVisible(!visible)}>
                <div className="add-card-plus"><div>+</div></div>
                <h2 className="add-card-text">Add New Jur Status</h2>
            </div>
            <div className="add-card">
            <div className="add-card-plus"><div>+</div></div>
                <h2 className="add-card-text">Add New Jur Status Type</h2>
            </div>
            <AddStatusModal visible={visible} setVisible={setVisible} />
        </section>
    )
}

export default AddContainer