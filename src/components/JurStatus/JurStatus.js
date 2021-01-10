import "./JurStatus.css"

function JurStatus({JurStatus}) {
    const { activationTime, isActive, statusType } = JurStatus
    return (
        <div className="jurstatus">
            <div className="jurstatus-activationtime">
                <p><span>Activation Time</span></p>
                <span><b>{activationTime}</b></span>
            </div>
            <div className="jurstatus-isactive">
                <p><span>Active</span></p>
                <span><b>{`${isActive}`}</b></span>
            </div>
            <div className="jurstatus-statustype">
                <p><span>Status Type</span></p>
                <span><b>{statusType}</b></span>
            </div>
        </div>
    )
}

export default JurStatus