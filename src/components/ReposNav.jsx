import { NavLink } from "react-router-dom";

export default function ReposNav() {
  return (
    <div className="reposContainer">
      <NavLink
        className={(navData) => (navData.isActive ? "active" : "")}
        to="/overview"
      >
        Overview
      </NavLink>
      <NavLink
        className={(navData) => (navData.isActive ? "active" : "")}
        to="/repos"
      >
        Repos
      </NavLink>
      <NavLink
        className={(navData) => (navData.isActive ? "active" : "")}
        to="/followers"
      >
        Followers
      </NavLink>
    </div>
  );
}
