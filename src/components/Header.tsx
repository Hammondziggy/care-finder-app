import '../uiStyles/Navbar.css';
const Header = () => {
    return (
        <header>
            <h1 className='title'>CareFinder</h1>
            <nav className="navbar">
                <li>Home</li>
                <li>About</li>
                <li>Find Hospital</li>
            </nav>
            <span>
                <button>Login</button>
                <button>Signup</button>
            </span>   
        </header>
    )
}

export default Header;