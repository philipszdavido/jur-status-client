import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header.js"
import Main from "./container/Main"

function App() {
  return (
    <div className="app">
      <Header />
      <Main {...props} />
    </div>
  );
}

export default App;
