import { BrowserRouter, Routes, Route } from "react-router-dom";
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
        <Routes>
          <Route path="/*" element={<Hero />} />
        </Routes>
      </BrowserRouter>
    </GithubState>
  );
}

export default App;
