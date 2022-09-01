// context
import { useContext } from "react";
import { GithubContext } from "../context/GithubContext";

export default function Overview() {
  const { overview } = useContext(GithubContext);
  let id = 0;

  console.log(overview);
  return (
    <div className="overviewContainer">
      {overview &&
        overview.map((item, idx) => (
          <a
            key={idx}
            href={item.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={"overview overview-" + ++id}>
              {item.name && <h2>{item.name}</h2>}
              {item.language && (
                <p>
                  <span></span>
                  {item.language}
                </p>
              )}
            </div>
          </a>
        ))}
    </div>
  );
}
