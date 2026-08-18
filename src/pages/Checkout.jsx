import { Link } from "react-router-dom";
import { useCart } from "../context/useCart";

function Checkout() {
  const { cartItems, cartTotal } = useCart();

  if (cartItems.length === 0) {
    return (
      <main className="checkout-page">
        <h1>Dein Warenkorb ist leer.</h1>

        <Link to="/shop" className="primary-button">
          Zum Shop
        </Link>
      </main>
    );
  }

  return (
    <main className="checkout-page">
      <Link to="/cart" className="back-link">
        ← Zurück zum Warenkorb
      </Link>

      <section className="checkout-layout">
        <div className="checkout-form">
          <p className="eyebrow">TEA ATELIER</p>

          <h1>Bestellung abschließen</h1>

          <div className="checkout-fields">
            <input type="text" placeholder="Vorname" />
            <input type="text" placeholder="Nachname" />
            <input type="email" placeholder="E-Mail-Adresse" />
            <input type="text" placeholder="Straße und Hausnummer" />
            <input type="text" placeholder="PLZ" />
            <input type="text" placeholder="Ort" />
          </div>

          <button className="checkout-button">
            Bestellung abschließen
          </button>
        </div>

        <aside className="checkout-summary">
          <h2>Deine Bestellung</h2>

          {cartItems.map((item) => (
            <div className="checkout-item" key={item.id}>
              <span>
                {item.name} × {item.quantity}
              </span>

              <strong>
                {(item.price * item.quantity)
                  .toFixed(2)
                  .replace(".", ",")} €
              </strong>
            </div>
          ))}

          <div className="checkout-total">
            <span>Gesamtsumme</span>

            <strong>
              {cartTotal.toFixed(2).replace(".", ",")} €
            </strong>
          </div>
        </aside>
      </section>
    </main>
  );
}

export default Checkout;