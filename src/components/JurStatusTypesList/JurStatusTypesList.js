import JurStatusTypes from "./../JurStatusTypes/JurStatusTypes.js"

function JurStatusTypesList({ jurStatusTypes = [] }) {
    return (
        <div>
            {
                jurStatusTypes.map((jurS, i) => <JurStatusTypes key={i} jurStatusTypes={jurS} />)
            }
        </div>
    )
}

export default JurStatusTypesList