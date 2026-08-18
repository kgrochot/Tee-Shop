function Home() {
  return (
    <div className="app">
      <header className="navbar">
        <a href="/" className="logo">
          Tea Atelier
        </a>

        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
        </nav>

        <a href="/cart" className="cart-link">
          Warenkorb
        </a>
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

            <a href="/shop" className="primary-button">
              Zum Shop
            </a>
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
            <a href="/shop" className="category-card">
              <span>01</span>
              <h3>Grüner Tee</h3>
              <p>Frisch, fein und ausgewogen.</p>
            </a>

            <a href="/shop" className="category-card">
              <span>02</span>
              <h3>Schwarzer Tee</h3>
              <p>Kräftig, aromatisch und klassisch.</p>
            </a>

            <a href="/shop" className="category-card">
              <span>03</span>
              <h3>Kräutertee</h3>
              <p>Natürlich und wohltuend.</p>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;