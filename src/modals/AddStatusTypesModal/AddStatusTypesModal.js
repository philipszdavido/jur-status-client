import React from "react"

function AddStatusTypesModal({ drizzle, drizzleState, visible, setVisible }) {
    const [disabled, setDisabled] = React.useState(false);

    async function addJurStatusType(e) {
        e.preventDefault()
        const statusTypeText = window.statusTypeInput.value

        if(statusTypeText.length === 0) {
            alert("Status type cannot be an empty string.")
            return
        }
        setDisabled(true)
        const contract = drizzle.contracts.JurStatus;

        await contract.methods["addStatusType"].cacheSend(statusTypeText, { from: drizzleState.accounts[0] });

        setDisabled(false)
        setVisible(!visible)
    }

    if(visible)
        return (
            <div className="modal">
            <div className="modal-backdrop" onClick={() => setVisible(!visible)}></div>
            <div className="modal-body">
                <div className="modal-head">
                    <h4 style={{ padding: 0, margin: 0 }}>Add New Jur Status Type</h4>
                    <div><span onClick={() => setVisible(!visible)} className="icon-close" style={{padding: '10px 9px', paddingRight: '1px', cursor: "pointer"}}>X</span></div>
                </div>
                <div className="modal-inner-body">
                    <div>
                        <div style={{
                            paddingTop: "5px",
                            paddingBottom: "5px",
                            fontWeight: 300,
                            fontSize: "larger"
                        }}>Status Type <i> (The type of the status complementing the bussiness logic)</i>:</div>
                        <input id="statusTypeInput" className="input-block input-bg" type="text" placeholder="Status Type here..." />
                    </div>
                </div>
                <div className="modal-footer">
                    <button disabled={disabled} onClick={() => setVisible(!visible)}>Cancel</button>
                    <button disabled={disabled} onClick={addJurStatusType} className="bgColor-default color-white">Add</button>
                </div>
            </div>    
            </div>
        )
    else
        return false
}

export default AddStatusTypesModal