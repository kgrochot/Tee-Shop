import { Link } from "react-router-dom";
import CategoryCard from "../components/CategoryCard";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <section className="hero">
          <div className="hero-content">

            <h1>
              Die Kunst,
              <br />
              guten Tee zu genießen.
            </h1>

            <p className="hero-text">
              Entdecke ausgewählte Teesorten für besondere Momente – sorgfältig
              zusammengestellt und mit Liebe zum Detail.
            </p>

            <Link to="/shop" className="primary-button">
              Zum Shop
            </Link>
          </div>

          <div className="hero-image">
            <div className="image-placeholder">
              <img
                src={`${import.meta.env.BASE_URL}images/tee-raum.jpg`}
                alt="Teeraum"
              />
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

            <p>Von feinen Grüntees bis zu aromatischen Kräutermischungen.</p>
          </div>

          <div className="category-grid">
            <CategoryCard
              title="Grüner Tee"
              description="Frisch, fein und ausgewogen."
              image={`${import.meta.env.BASE_URL}images/jasmin-gruentee.jpg`}
            />

            <CategoryCard
              title="Schwarzer Tee"
              description="Kräftig, aromatisch und klassisch."
              image={`${import.meta.env.BASE_URL}images/earl-grey.jpg`}
            />

            <CategoryCard
              title="Kräutertee"
              description="Natürlich und wohltuend."
              image={`${import.meta.env.BASE_URL}images/kraeuter-balance.jpg`}
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
