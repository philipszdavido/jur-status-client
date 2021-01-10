import JurStatus from "./../JurStatus/JurStatus.js"

function JurStatusList({JurStatuses = []}) {
    return (
        <div>
            {JurStatuses.map((jurStatus, i) => <JurStatus key={i} JurStatus={jurStatus} />)}
        </div>
    )
}

export default JurStatusList