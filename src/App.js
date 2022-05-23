import logo from "./logo.svg";
import "./App.css";
import Tooltip from "./Tooltip";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Calling the Tooltip component and passing values */}
        <Tooltip text="THIS IS THE HOVER " position="top">
          <span className="text" id="tooltip-component">
            React Skill Test 1: Tooltip
          </span>
        </Tooltip>
      </header>
    </div>
  );
}

export default App;
