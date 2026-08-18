import { Link } from "react-router-dom";
import { useCart } from "../context/useCart";

function Navbar() {
  const { cartCount } = useCart();

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

        <a
          href="https://kgrochot.github.io/TeeAtelier/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Über Tee
        </a>
      </nav>

      <Link to="/cart" className="cart-link">
        Warenkorb
        {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
      </Link>
    </header>
  );
}

export default Navbar;
