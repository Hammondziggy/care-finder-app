import { Link } from 'react-router-dom';
import '../uiStyles/Header.css';
const Header = () => {
  return (
    <header className="header">
      <h1 className='title'>CareFinder</h1>
      <nav className="navbar">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/find-hospital" className="nav-link">Find Hospital</Link>
        <span className="buttons">
          <Link to="/Login" className="button-link">
            <button className="btn">Login</button>
          </Link>
          <Link to="/Signup" className="button-link">
            <button className="btn">Signup</button>
          </Link>
        </span>
      </nav>
    </header>
  );
}

export default Header;