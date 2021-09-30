import "./header.styles.scss";
import React from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";

export default function Header({ currentUser }) {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div onClick={() => auth.signOut()} className="option">
            Sign Out
          </div>
        ) : (
          <Link className="option" to={"/signin"}>
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
}
