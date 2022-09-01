// context
import { useContext } from "react";
import { GithubContext } from "../context/GithubContext";

export default function Repos() {
  const { repos } = useContext(GithubContext);
  console.log(repos);
  return (
    <>
      {repos &&
        repos.map((repo, idx) => (
          <a
            key={idx}
            href={repo.html_url}
            raget="_blank"
            rel="noopener noreferrer"
            className="reposWrap"
          >
            <div className="repos">
              {repo.name && <p>{repo.name}</p>}
              <div className="repoInfo">
                {repo.language && (
                  <p>
                    <span></span>
                    {repo.language}
                  </p>
                )}
                &nbsp;
                {repo.updated_at && <p>{repo.updated_at}</p>}
              </div>
            </div>
          </a>
        ))}
    </>
  );
}
