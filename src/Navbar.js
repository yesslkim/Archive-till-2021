import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Kim's Blog</h1>
      <div className="links">
        <Link to="/">HOME</Link>
        <Link to="/create">NEW BLOG</Link>
      </div>
    </nav>
  );
};

export default Navbar;
