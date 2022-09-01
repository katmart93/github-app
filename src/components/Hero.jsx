// context
import { useContext } from "react";
import { GithubContext } from "../context/GithubContext";
// components
import Container from "./Container";
import Nav from "./Nav";
import User from "./User";
import ReposNav from "./ReposNav";
import ReposContainer from "./ReposContainer";

export default function Hero() {
  const { user, error } = useContext(GithubContext);

  return (
    <section className="hero">
      <Nav />
      <Container>
        {user ? (
          <>
            <User />
            <div className="wrapper">
              <ReposNav />
              <ReposContainer />
            </div>
          </>
        ) : (
          <p className="noUser">{error}</p>
        )}
      </Container>
    </section>
  );
}
