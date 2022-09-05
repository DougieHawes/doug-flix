import { Link } from "react-router-dom";

import User from "../../images/user.png";

import "./style.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/">
          <h1 className="title">dougflix</h1>
        </Link>
        <div className="user-image">
          <img src={User} alt="user avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
