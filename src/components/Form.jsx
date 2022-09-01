// context
import { useContext } from "react";
import { GithubContext } from "../context/GithubContext";

export default function Form() {
  const { search, setSearch, getSearch } = useContext(GithubContext);

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
