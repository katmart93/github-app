// context
import { GithubState } from "./context/GithubContext";

// components
import Hero from "./components/Hero";

// styles
import "./App.css";

function App() {
  return (
    <GithubState>
      <Hero />
    </GithubState>
  );
}

export default App;
