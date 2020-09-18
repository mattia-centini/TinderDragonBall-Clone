import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/QuestionAnswer";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link, useHistory } from "react-router-dom";
import "./Header.css";

function Header({ backButton }) {
  const history = useHistory();
  return (
    <div className="header">
      {/* IconButton adds click style and hover to anything wrapped within */}
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIosIcon className="header__icons" fontSize="large" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon className="header__icon" fontSize="large" />
        </IconButton>
      )}

      <Link to="/">
        <img
          className="header__logo"
          src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
          alt="tinder logo"
        />
      </Link>

      <Link to="chat">
        {/* wrapping the chat button in a Link component so that can be routed to a different page. Link accepts a prop "to=/urlpage" */}

        <IconButton>
          <ForumIcon className="header__icon" fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
