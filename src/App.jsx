import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BurgerBuilder from './components/BurgerBuilder';
import BurgerBuilderBase from './components/BurgerBuilderBase';
import Login from './components/Login';
import Orders from './components/Orders';
import { useEffect,useState } from 'react';

function App() {

  const [isLogin,setIsLogin] = useState(false);

  useEffect(() => {
     console.log("App useEffect called");
     
  },[isLogin]);


  return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar isLogin={false} setIsLogin={setIsLogin}/>}>
          <Route index  element={<BurgerBuilder  />} />
          <Route path="BurgerBuilderBase"  element={<BurgerBuilderBase  />} />
          <Route path="Login" element={<Login isLogin={false} setIsLogin={setIsLogin}/>} />
          <Route path="Orders" element={<Orders />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;

/*   pre written code
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      */ 