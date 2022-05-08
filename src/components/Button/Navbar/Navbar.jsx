import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="navbar">
      <p>Hacker Minimise</p>
      <Link to="feed">Feed</Link>
    </nav>
  );
}
