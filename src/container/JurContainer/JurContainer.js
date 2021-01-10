import React from "react"
import "./JurContainer.css"
import JurStatusList from "../../components/JurStatusList/JurStatusList.js"
import JurStatusTypesList from "../../components/JurStatusList/JurStatusList.js"
import Spinner from "./../../components/Spinner/Spinner.js"

function JurContainer(props) {
    const [{ loading, drizzleState }, setState] = React.useState({
        loading: true,
        drizzleState: null
    })
    var unsubscribe

    React.useEffect(() => {
        const { drizzle } = props;

        // subscribe to changes in the store
        unsubscribe = drizzle.store.subscribe(() => {
    
          // every time the store updates, grab the state from drizzle
          const drizzleState = drizzle.store.getState();
    
          // check to see if it's ready, if so, update local component state
          if (drizzleState.drizzleStatus.initialized) {
            setState({ loading: false, drizzleState });

            const contract = drizzle.contracts.JurStatus;
            console.log(contract)
            // let drizzle know we want to watch the `myString` method
            // const dataKey = contract.methods["myString"].cacheCall();
        
            // save the `dataKey` to local component state for later reference
            // this.setState({ dataKey });            
          }
        });
        return () => unsubscribe()
    })

    return (
        <section className="jurcontainer">
            <div className="jurcontainer-statuses">
                <div className="jurcontainer-statuses-header">Jur Statuses</div>
                <div>
                    {loading? <Spinner visible={loading} /> : 
                        <JurStatusList JurStatuses={[{
                            activationTime: 12,
                            isActive: true,
                            statusType: "Type-O"
                        },{
                            activationTime: new Date().toLocaleTimeString(),
                            isActive: false,
                            statusType: "Type-X"
                        }                    
                        ]} />
                    }
                </div>
            </div>
            <div className="jurcontainer-statustypes">
                <div className="jurcontainer-statustypes-header">Jur Status Types</div>
                <div>
                    <JurStatusTypesList JurStatusTypes={[]} />
                </div>
            </div>
        </section>
    )
}

export default JurContainer