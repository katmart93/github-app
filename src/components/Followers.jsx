// context
import { useContext } from "react";
import { GithubContext } from "../context/GithubContext";

export default function Followers() {
  const { followers } = useContext(GithubContext);

  return (
    <>
      {followers &&
        followers.map((follower, idx) => (
          <a
            key={idx}
            href={follower.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="followersContainer"
          >
            <div className="followers">
              <img src={follower.avatar_url} alt="follower" />
              <p>{follower.login}</p>
            </div>
          </a>
        ))}
    </>
  );
}
