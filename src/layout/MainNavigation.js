import img from "../paws logo.PNG";
import { NavLink, Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { useState } from "react";
import { useContext } from "react";
import AuthContext from "../store/auth-context";

const MainNavigation = () => {
  const [clicked, setClicked] = useState(false);
  const authCtx = useContext(AuthContext);

  const handleClick = () => {
    setClicked((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setClicked(false);
  };

  return (
    <nav className={classes.navbar}>
      <div className={classes["navbar-container"]}>
        <Link to="/">
          <img className={classes["navbar-logo"]} src={img} alt="Paws Logo" />
        </Link>

        <div className={classes.righthandside}>
          <ul
            className={
              clicked
                ? `${classes["nav-menu"]} ${classes.active}`
                : classes["nav-menu"]
            }
          >
            {authCtx.isLoggedIn && (
              <li className={classes["nav-item"]}>
                <NavLink
                  className={classes["nav-links"]}
                  to="/list"
                  activeClassName={classes.active}
                  onClick={closeMobileMenu}
                >
                  Profile
                </NavLink>
              </li>
            )}
            {!authCtx.isLoggedIn && (
              <li className={classes["nav-item"]}>
                <NavLink
                  className={classes["nav-links"]}
                  to="/auth"
                  activeClassName={classes.active}
                  onClick={closeMobileMenu}
                >
                  Auth
                </NavLink>
              </li>
            )}
            {authCtx.isLoggedIn && (
              <li>
                <button onClick={authCtx.onLogout} className={classes.logout}>
                  Logout
                </button>
              </li>
            )}
          </ul>
          <div className={classes["menu-icon"]} onClick={handleClick}>
            <ion-icon
              className={classes.ionicon}
              name={clicked ? "close-outline" : "menu-outline"}
            ></ion-icon>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainNavigation;
