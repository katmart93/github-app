import { BrowserRouter } from "react-router-dom";
// context
import { GithubState } from "./context/GithubContext";
// components
import Hero from "./components/Hero";
// styles
import "./App.css";

function App() {
  return (
    <GithubState>
      <BrowserRouter>
        <Hero />
      </BrowserRouter>
    </GithubState>
  );
}

export default App;
