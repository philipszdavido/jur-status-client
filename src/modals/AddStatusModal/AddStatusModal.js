import "./AddStatusModal.css"

function AddStatusModal({visible, setVisible}) {
    if(visible)
    return (
        <div className="modal">
        <div className="modal-backdrop" onClick={() => setVisible(!visible)}></div>
        <div className="modal-body">
            <div className="modal-head">
                <h4 style={{ padding: 0, margin: 0 }}>Add New Jur Status</h4>
                <div><span onClick={() => setVisible(!visible)} className="icon-close" style={{padding: '10px 9px', paddingRight: '1px', cursor: "pointer"}}>X</span></div>
            </div>
            <div className="modal-inner-body">
                <div>
                </div>
            </div>
            <div className="modal-footer">
                <button>Cancel</button>
                <button className="bgColor-default color-white">Add</button>
            </div>
        </div>    
        </div>
    )
    else
    return false
}

export default AddStatusModal