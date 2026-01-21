import "../styles/Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-logo">TalkAI</div>

            <ul className="nav-links">
                <li>Product</li>
                <li>Solutions</li>
                <li>Pricing</li>
                <li>Company</li>
            </ul>
            <button className="nav-btn">Login</button>
            <button className="nav-btn">Book a Demo</button>
        </nav>
    );
};

export default Navbar;
