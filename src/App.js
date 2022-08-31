// context
import { GithubState } from "./context/GithubContext";

// styles
import "./App.css";

function App() {
  return (
    <GithubState>
      <div className="App">
        <h1>hello</h1>
      </div>
    </GithubState>
  );
}

export default App;
