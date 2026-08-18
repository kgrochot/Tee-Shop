import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="app">
      <header className="navbar">
        <Link to="/" className="logo">
          Tea Atelier
        </Link>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
        </nav>

        <Link to="/cart" className="cart-link">
          Warenkorb
        </Link>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">TEA ATELIER</p>

            <h1>
              Die Kunst,
              <br />
              guten Tee zu genießen.
            </h1>

            <p className="hero-text">
              Entdecke ausgewählte Teesorten für besondere
              Momente – sorgfältig zusammengestellt und
              mit Liebe zum Detail.
            </p>

            <Link to="/shop" className="primary-button">
              Zum Shop
            </Link>
          </div>

          <div className="hero-image">
            <div className="image-placeholder">
              <span>Tea Atelier</span>
            </div>
          </div>
        </section>

        <section className="featured">
          <div className="section-heading">
            <p className="eyebrow">UNSERE AUSWAHL</p>

            <h2>
              Entdecke deine
              <br />
              neue Lieblingsteesorte
            </h2>

            <p>
              Von feinen Grüntees bis zu aromatischen
              Kräutermischungen.
            </p>
          </div>

          <div className="category-grid">
            <Link to="/shop" className="category-card">
              <span>01</span>
              <h3>Grüner Tee</h3>
              <p>Frisch, fein und ausgewogen.</p>
            </Link>

            <Link to="/shop" className="category-card">
              <span>02</span>
              <h3>Schwarzer Tee</h3>
              <p>Kräftig, aromatisch und klassisch.</p>
            </Link>

            <Link to="/shop" className="category-card">
              <span>03</span>
              <h3>Kräutertee</h3>
              <p>Natürlich und wohltuend.</p>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;