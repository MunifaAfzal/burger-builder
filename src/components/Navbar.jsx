import "./Navbar.css";
import { Outlet, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function NavBar({ isLogin, setIsLogin }) {
  let location = useLocation();
  const [loginLogoutText, setLoginLogoutText] = useState("Login");
  const [isOpen, setIsOpen] = useState({
    burgerBuilderBase: true,
    auth: false,
    Orders: false,
  });

  const [loginLogoutPath, setLoginLogoutPath] = useState("/auth");

  const updateLoginLogoutPath = () => {
    if (!isLogin) {
      setLoginLogoutPath((path) => (path = "/auth"));
    } else {
      console.log("current path " + location.pathname);
      setLoginLogoutPath((path) => (path = location.pathname));
    }
  };

  const handleLinkclicked = (name) => {
    if (name === "auth" && loginLogoutText === "Logout") {
      console.log("logout button clicked");
      setIsLogin(false);
    } else {
      for (let navBar of Object.keys(isOpen)) {
        console.log(navBar + " : " + isOpen[navBar]);
        if (navBar === name) {
          setIsOpen((prevState) => ({
            ...prevState,
            [name]: true,
          }));
        } else {
          setIsOpen((prevState) => ({
            ...prevState,
            [navBar]: false,
          }));
        }
      }
    }
  };

  const changeNavLinkButton = () => {
    console.log("change NavLink called ");
    console.log(" Location : " + location);
    console.log(" location path : " + location.pathname);
    let name = location.pathname.replace("/", "");
    console.log(" name : " + name);
    if (!name) name = "burgerBuilderBase";
    for (let navBar of Object.keys(isOpen)) {
      console.log(navBar + " : " + isOpen[navBar]);
      if (navBar === name) {
        console.log("path found");
        setIsOpen((prevState) => ({
          ...prevState,
          [name]: true,
        }));
      } else {
        setIsOpen((prevState) => ({
          ...prevState,
          [navBar]: false,
        }));
      }
    }
  };

  useEffect(() => {
    console.log("use effect of NavBar called");
    setLoginLogoutText(isLogin ? "Logout" : "Login");
    updateLoginLogoutPath();
    console.log("location" + location);
    console.log("Location path name " + location.pathname);
    changeNavLinkButton();
  }, [isLogin, location.pathname]);

  return (
    <>
      <div className="nav-header">
        <div className="logo-section">
          <img
            className="logo"
            src={require("./images/burger-logo.png")}
            alt="Burger Logo"
          ></img>
        </div>
        <nav>
          <ul className="nav-btn-list">
            <li>
              <Link
                className={
                  isOpen["burgerBuilderBase"] ? "active-nav-btn" : "nav-btn"
                }
                to="/"
                onClick={() => handleLinkclicked("burgerBuilderBase")}
              >
                Burger Builder
              </Link>
            </li>
            {isLogin && (
              <li>
                <Link
                  className={isOpen["Orders"] ? "active-nav-btn" : "nav-btn"}
                  to="/Orders"
                  onClick={() => handleLinkclicked("Orders")}
                >
                  Orders
                </Link>
              </li>
            )}
            <li>
              <Link
                className={isOpen["auth"] ? "active-nav-btn" : "nav-btn"}
                to={loginLogoutPath}
                onClick={() => handleLinkclicked("auth")}
              >
                {loginLogoutText}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

/*  <li>
          <Link className={isOpen['burgerBuilder'] ? "active-nav-btn" : "nav-btn"} to="/"
                  onClick={() => handleLinkclicked('burgerBuilder')} >Burger Builder</Link>
          </li> */
