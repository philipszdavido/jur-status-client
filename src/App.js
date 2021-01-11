import React from "react";
import './App.css';
import Header from "./components/Header/Header.js"
import Main from "./container/Main"

function App(props) {
  const { drizzle } = props
  const [ drizzleProps, setDrizzleProps] = React.useState({
    loadingStore: true,
    drizzleState: null
  })
  React.useEffect(() => {
      const unsubscribe = drizzle.store.subscribe(() => {
        console.log("subsc")
          // every time the store updates, grab the state from drizzle
          const drizzleState = drizzle.store.getState();
    
          // check to see if it's ready, if so, update local component state
          if (drizzleState.drizzleStatus.initialized) {
            setDrizzleProps({ loadingStore: false, drizzleState });
          }
        });
      return () => unsubscribe()
  }, [drizzle.store, drizzleProps])

  return (
    <div className="app">
      <Header />
      <Main {...drizzleProps} drizzle={drizzle} />
    </div>
  );
}

export default App;
