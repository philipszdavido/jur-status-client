import JurStatus from "./../JurStatus/JurStatus.js"

function JurStatusList({jurStatus = []}) {
    return (
        <div>
            {jurStatus.map((_jurStatus, i) => <JurStatus key={i} JurStatus={_jurStatus} />)}
        </div>
    )
}

export default JurStatusList