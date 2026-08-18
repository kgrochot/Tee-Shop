import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="logo">
        <img
          src={`${import.meta.env.BASE_URL}images/tea-atelier.png`}
          alt="Tea Atelier"
        />
      </Link>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
      </nav>

      <Link to="/cart" className="cart-link">
        Warenkorb
      </Link>
    </header>
  );
}

export default Navbar;