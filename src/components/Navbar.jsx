import "./Navbar.css"
import { Outlet, Link } from "react-router-dom";
import {useEffect, useState} from "react";

function NavBar({isLogin,setIsLogin}){
    const [isOpen, setIsOpen]= useState({
      burgerBuilder:true,
      burgerBuilderBase:false,
      login:false,
      Orders:false,
    });

  const [loginLogoutText , setLoginLogoutText] =  useState('Login');

  const handleLinkclicked= (name) => {
    for(let navBar of Object.keys(isOpen)){
        console.log(navBar  + " : " + isOpen[navBar]);
        if(navBar===name){
      setIsOpen((prevState) => ({
        ...prevState,[name] : true,  
      }));
        }else{
      setIsOpen((prevState) => ({
        ...prevState,[navBar] : false,  
    }));
    }
    }
  };

  

  useEffect(() => {
    console.log('use effect of NavBar called');
     setLoginLogoutText(isLogin ? 'Logout' : 'Login');
  },[isLogin]);

      
    
    return (
        <>
     <div className="nav-header">
        <div className="logo-section">
            <img className="logo" src={require ('./images/burger-logo.png')}  alt="Burger Logo" ></img>
        </div>
        <nav>
        <ul  className="nav-btn-list" >
          
          <li>
            <Link className={isOpen['burgerBuilderBase'] ? "active-nav-btn" : "nav-btn"} to="/BurgerBuilderBase"
                  onClick={() => handleLinkclicked('burgerBuilderBase')} >Burger Builder Base</Link>
          </li>
          
        </ul>
      </nav>
     </div>
     <Outlet />
   
    </>
    );
}

export default NavBar;

/*
<li>
            <Link className={isOpen['burgerBuilder'] ? "active-nav-btn" : "nav-btn"} to="/"
                  onClick={() => handleLinkclicked('burgerBuilder')} >Burger Builder</Link>
          </li>
          <li>
            <Link className={isOpen['burgerBuilderBase'] ? "active-nav-btn" : "nav-btn"} to="/BurgerBuilderBase"
                  onClick={() => handleLinkclicked('burgerBuilderBase')} >Burger Builder Base</Link>
          </li>
          <li>
            <Link  className={isOpen['login'] ? "active-nav-btn" : "nav-btn"} to="/Login"
                  onClick={() => handleLinkclicked('login')} > {loginLogoutText}</Link>

            {isLogin && 
              <Link  className={isOpen['Orders'] ? "active-nav-btn" : "nav-btn"} to="/Login"
                  onClick={() => handleLinkclicked('Orders')} >Orders</Link>}      
          </li> */