import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="Navigation bg-buttercup">
      <div className="md:container mx-auto">
        <ul className="flex">
          <li>
            <Link className="block py-sm px-md hover:bg-wisteria hover:text-white" to="/">Home</Link>
          </li>
          <li>
            <Link className="block py-sm px-md hover:bg-wisteria hover:text-white" to="/posts">Posts</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
