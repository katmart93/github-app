import { Routes, Route } from "react-router-dom";

export default function ReposContainer() {
  return (
    <div className="reposContainer">
      <Routes>
        <Route path="/overview" />
        <Route path="/repos" />
        <Route path="/followers" />
      </Routes>
    </div>
  );
}
