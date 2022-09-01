import { Routes, Route } from "react-router-dom";
// components
import Overview from "./Overview";
import Repos from "./Repos";

export default function ReposContainer() {
  return (
    <div className="reposContainer">
      <Routes>
        <Route path="/overview" element={<Overview />} />
        <Route path="/repos" element={<Repos />} />
        <Route path="/followers" />
      </Routes>
    </div>
  );
}
