import React from "react";
import JurStatusTypes from "./../../components/JurStatusTypes/JurStatusTypes.js"

function AddStatusModal({ drizzle, drizzleState, visible, setVisible }) {
    const [disabled, setDisabled] = React.useState(false);
    const [statusTypes, setStatusTypes] = React.useState([])
    const [{
        statusIndex,
        highlightIndex
    }, setStatusHighlightIndex] = React.useState({
        statusIndex: null,
        highlightIndex: null
    })

    async function addJurStatus(e) {
        e.preventDefault()
        if(statusIndex === null) {
            alert("Please provide a valid index.")
            return
        }
        setDisabled(true)
        const contract = drizzle.contracts.JurStatus;
        
        await contract.methods.addJurStatus.cacheSend(drizzleState.accounts[1], statusIndex, { from: drizzleState.accounts[0], gas: 1000000 });
        setDisabled(false)
        setVisible(!visible)
    }

    React.useEffect(() => {
        getStatusTypes()
    })

    const getStatusTypes = async () => {
        const contract = await drizzle.contracts.JurStatus;
        if(contract) {
            const _statusTypes = await contract.methods.getStatusTypes().call({ from: drizzleState.accounts[0] });
            setStatusTypes(_statusTypes)
        }
    }

    function clickHandler(i) {
        return () => {
            setStatusHighlightIndex({
                statusIndex: i,
                highlightIndex: i
            })
        }
    }

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
                    <div style={{
                        height: "250px",
                        overflow: "scroll"                        
                    }}>
                        <div style={{
                            paddingTop: "5px",
                            paddingBottom: "5px",
                            fontWeight: 300,
                            fontSize: "larger"
                        }}>Select Status Type:</div>
                        <div style={{border: "1px solid"}}>
                            {
                                statusTypes.map((jurS, i) => <JurStatusTypes key={i} jurStatusTypes={jurS} onClickHandler={clickHandler(i)} highlightIndex={highlightIndex === i ? true: null} />)
                            }
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button disabled={disabled} onClick={() => setVisible(!visible)}>Cancel</button>
                    <button disabled={disabled} onClick={addJurStatus} className="bgColor-default color-white">Add</button>
                </div>
            </div>    
            </div>
        )
    else
        return false
}

export default AddStatusModal