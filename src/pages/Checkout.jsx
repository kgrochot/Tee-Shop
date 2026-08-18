import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/useCart";

function Checkout() {
  const { cartItems, cartTotal } = useCart();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    zip: "",
    city: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const orderItems = cartItems
      .map(
        (item) =>
          `${item.name} × ${item.quantity} – ${(item.price * item.quantity)
            .toFixed(2)
            .replace(".", ",")} €`,
      )
      .join("\n");

    const subject = "Neue Tee-Bestellung – Tea Atelier";

    const body = `Hallo Tea Atelier,

ich möchte folgende Tees bestellen:

${orderItems}

Gesamtsumme: ${cartTotal.toFixed(2).replace(".", ",")} €

Kundendaten:
${formData.firstName} ${formData.lastName}
${formData.street}
${formData.zip} ${formData.city}
E-Mail: ${formData.email}

Vielen Dank!
`;

    const mailto = `mailto:deine-email@example.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  };

  if (cartItems.length === 0) {
    return (
      <main className="checkout-page">
        <div className="cart-empty">
          <span className="cart-empty-number">00</span>

          <h2>Dein Warenkorb ist leer.</h2>

          <p>Entdecke unsere Tees und finde deine persönlichen Favoriten.</p>

          <Link to="/shop" className="primary-button">
            Tees entdecken
          </Link>
        </div>
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
          <div className="checkout-brand">
            <img
              src={`${import.meta.env.BASE_URL}images/tea-atelier.webp`}
              alt="Tea Atelier"
              className="checkout-logo"
            />

            <p className="checkout-brand-text">
              Deine Bestellung bei Tea Atelier
            </p>
          </div>

          <h1>Bestellung abschließen</h1>

          <form onSubmit={handleSubmit}>
            <div className="checkout-fields">
              <input
                type="text"
                name="firstName"
                placeholder="Vorname"
                value={formData.firstName}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="lastName"
                placeholder="Nachname"
                value={formData.lastName}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="E-Mail-Adresse"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="street"
                placeholder="Straße und Hausnummer"
                value={formData.street}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="zip"
                placeholder="PLZ"
                value={formData.zip}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="city"
                placeholder="Ort"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="checkout-button">
              Bestellung abschließen
            </button>
          </form>
        </div>

        <aside className="checkout-summary">
          <h2>Deine Bestellung</h2>

          {cartItems.map((item) => (
            <div className="checkout-item" key={item.id}>
              <span>
                {item.name} × {item.quantity}
              </span>

              <strong>
                {(item.price * item.quantity).toFixed(2).replace(".", ",")} €
              </strong>
            </div>
          ))}

          <div className="checkout-total">
            <span>Gesamtsumme</span>

            <strong>{cartTotal.toFixed(2).replace(".", ",")} €</strong>
          </div>
        </aside>
      </section>
    </main>
  );
}

export default Checkout;
