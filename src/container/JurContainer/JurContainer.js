import React from "react"
import "./JurContainer.css"
import JurStatusList from "../../components/JurStatusList/JurStatusList.js"
import JurStatusTypesList from "../../components/JurStatusTypesList/JurStatusTypesList.js"
import Spinner from "./../../components/Spinner/Spinner.js"

function JurContainer({ loadingStore, drizzle, drizzleState }){

    const [ {
        jurStatus,
        statusTypes
    }, setJurStatusOpts] = React.useState({
        statusTypes: [],
        jurStatus: []
    })

    React.useEffect(() => {
        getJurStatusList()
    }, [drizzleState]/* HERE */)

    const getJurStatusList = async () => {
        if(drizzleState?.drizzleStatus?.initialized) {
            const contract = await drizzle.contracts.JurStatus;
        
            const _statusTypes = await contract.methods.getStatusTypes().call({ from: drizzleState.accounts[0] });

            const jurStatuses = await contract.methods.getStatusList().call({ from: drizzleState.accounts[0] });
            setJurStatusOpts({
                statusTypes: _statusTypes,
                jurStatus: jurStatuses
            })
        }
    }

    return (
            <section className="jurcontainer">
                <div className="jurcontainer-statuses">
                    <div className="jurcontainer-statuses-header">Jur Statuses</div>
                    <div>
                        {
                            loadingStore ? 
                                <Spinner visible={loadingStore} /> :
                                <JurStatusList jurStatus={jurStatus} />
                        }
                    </div>
                </div>
                <div className="jurcontainer-statustypes">
                    <div className="jurcontainer-statustypes-header">Jur Status Types</div>
                    <div>
                        {
                                loadingStore ? 
                                    <Spinner visible={loadingStore} /> :
                                    <JurStatusTypesList jurStatusTypes={statusTypes} />
                        }
                    </div>
                </div>
            </section>
        )
}

export default JurContainer