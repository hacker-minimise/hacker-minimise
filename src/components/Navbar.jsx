import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav>
      <p>Hacker Minimise</p>
      <Link to="feed">Feed</Link>
    </nav>
  );
}
