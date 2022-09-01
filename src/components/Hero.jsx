// context
import { useContext } from "react";
import { GithubContext } from "../context/GithubContext";
// components
import Container from "./Container";
import Nav from "./Nav";
import User from "./User";
import ReposNav from "./ReposNav";

export default function Hero() {
  const { user } = useContext(GithubContext);

  return (
    <section className="hero">
      <Nav />
      <Container>
        {user ? (
          <>
            <User />
            <div className="wrapper">
              <ReposNav />
            </div>
          </>
        ) : (
          <p>No user found...</p>
        )}
      </Container>
    </section>
  );
}
