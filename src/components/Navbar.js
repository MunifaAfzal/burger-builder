import "./Navbar.css"
import { Outlet, Link } from "react-router-dom";

function NavBar(){
    return (
        <>
     <div className="nav-header">
        <div className="logo-section">
            <img className="logo" src={require ('./images/burger-logo.png')}  alt="Burger Logo" ></img>
        </div>
        <nav>
        <ul  className="nav-btn-list" >
          <li>
            <Link  className="nav-btn" to="/">Burger Builder</Link>
          </li>
          <li>
            <Link className="nav-btn" to="/Login">Login</Link>
          </li>
        </ul>
      </nav>
     </div>
     <Outlet />
   
    </>
    );
}

export default NavBar;


/*   <div className="nav-header">
        <div  className="logo-section" >
            <img className="logo" src={require ('./images/burger-logo.png')}  alt="Burger Logo" ></img>
        </div>
      </div>  */

/*   <nav>  <ul>
          <li>
            <a href="index.html">BurgerBuilder</a>
          </li>
          <li>
            <a href="index.html">Login</a>
          </li>
        </ul> 
      </nav>  */