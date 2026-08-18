import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/useCart";
import Navbar from "../components/Navbar";

function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const product = products.find(
    (product) => product.id === Number(id)
  );

  if (!product) {
    return (
      <div className="app">
        <Navbar />

        <main className="product-detail-page">
          <h1>Produkt nicht gefunden</h1>

          <Link to="/shop" className="back-link">
            Zurück zum Shop
          </Link>
        </main>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1800);
  };

  return (
    <div className="app">
      <Navbar />

      <main className="product-detail-page">
        <Link to="/shop" className="back-link">
          ← Zurück zum Shop
        </Link>

        <section className="product-detail">
          <div className="product-detail-image">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="product-detail-info">
            <p className="product-category">
              {product.category}
            </p>

            <h1>{product.name}</h1>

            <p className="product-detail-description">
              {product.description}
            </p>

            <div className="product-meta">
              <p>
                <strong>Herkunft:</strong> {product.origin}
              </p>

              <p>
                <strong>Gewicht:</strong> {product.weight}
              </p>
            </div>

            <p className="product-price">
              {product.price.toFixed(2).replace(".", ",")} €
            </p>

            <button
              className={`add-to-cart-button ${added ? "added" : ""}`}
              onClick={handleAddToCart}
            >
              {added ? "✓ Hinzugefügt" : "In den Warenkorb"}
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ProductDetail;