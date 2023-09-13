import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BurgerBuilder from './components/BurgerBuilder';
import Login from './components/Login';

function App() {
  return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index  element={<BurgerBuilder />} />
          <Route path="Login" element={<Login />} />
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