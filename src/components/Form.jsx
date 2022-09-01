import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// context
import { GithubContext } from "../context/GithubContext";

export default function Form() {
  const { search, setSearch, getSearch } = useContext(GithubContext);
  const navigate = useNavigate();

  // when the page loads, it redirects to /overview
  useEffect(() => {
    navigate("/overview");
  }, []);

  return (
    <form onSubmit={getSearch}>
      <input
        type="text"
        autoFocus
        placeholder="Search a user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
}
