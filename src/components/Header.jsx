import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/images/logo.svg";

const Header = () => {
  const [userInfo] = useContext(UserContext);

  return (
    <header className="header">
      <div className="container">
        <Link to="/">
          <Logo className="logo" />
        </Link>
        <dl>
          <div>
            <dt>Username:</dt>
            <dd>{userInfo.username}</dd>
          </div>
          <div>
            <dt>Role:</dt>
            <dd>{userInfo.role}</dd>
          </div>
        </dl>
      </div>
    </header>
  );
};

export default Header;
