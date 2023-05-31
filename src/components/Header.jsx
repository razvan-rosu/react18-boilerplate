import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/images/logo.svg";

import './Header.css';

const Header = () => {
  const [userInfo] = useContext(UserContext);

  return (
    <header className="Header bg-white">
      <div className="md:container mx-auto flex justify-between py-md px-lg">
        <Link to="/">
          <Logo />
        </Link>
        <dl className="flex flex-col">
          <div className="flex">
            <dt className="mr-sm text-grey-900">Username:</dt>
            <dd>{userInfo.username}</dd>
          </div>
          <div className="flex">
            <dt className="mr-sm text-grey-900">Role:</dt>
            <dd>{userInfo.role}</dd>
          </div>
        </dl>
      </div>
    </header>
  );
};

export default Header;
