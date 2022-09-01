import { Routes, Route } from "react-router-dom";
// components
import Overview from "./Overview";

export default function ReposContainer() {
  return (
    <div className="reposContainer">
      <Routes>
        <Route path="/overview" element={<Overview />} />
        <Route path="/repos" />
        <Route path="/followers" />
      </Routes>
    </div>
  );
}
