import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="container">
        <ul className="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
