import JurStatus from "./../JurStatus/JurStatus.js"

function JurStatusList({JurStatuses = []}) {
    return (
        <div>
            {JurStatuses.map((jurStatus) => <JurStatus JurStatus={jurStatus} />)}
        </div>
    )
}

export default JurStatusList