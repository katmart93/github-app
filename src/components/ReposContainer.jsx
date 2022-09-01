import { Routes, Route } from "react-router-dom";
// components
import Overview from "./Overview";
import Repos from "./Repos";
import Followers from "./Followers";

export default function ReposContainer() {
  return (
    <div className="reposContainer">
      <Routes>
        <Route path="/overview" element={<Overview />} />
        <Route path="/repos" element={<Repos />} />
        <Route path="/followers" element={<Followers />} />
      </Routes>
    </div>
  );
}
