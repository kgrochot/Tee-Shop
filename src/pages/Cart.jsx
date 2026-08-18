import { Link } from "react-router-dom";
import { useCart } from "../context/useCart";
import Navbar from "../components/Navbar";

function Cart() {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    cartTotal,
  } = useCart();

  return (
    <div className="app">
      <Navbar />

      <main className="cart-page">
        <section className="cart-header">
          <h1>Deine ausgewählten Tees.</h1>
          
        </section>

        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <p>Dein Warenkorb ist noch leer.</p>

            <Link to="/shop" className="primary-button">
              Zum Shop
            </Link>
          </div>
        ) : (
          <>
            <section className="cart-items">
              {cartItems.map((item) => (
                <article className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.name} />

                  <div className="cart-item-info">
                    <p className="product-category">{item.category}</p>

                    <h2>{item.name}</h2>

                    <p>{item.price.toFixed(2).replace(".", ",")} €</p>
                  </div>

                  <div className="cart-quantity">
                    <button onClick={() => decreaseQuantity(item.id)}>−</button>

                    <span>{item.quantity}</span>

                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>

                  <div className="cart-item-total">
                    {(item.price * item.quantity).toFixed(2).replace(".", ",")}{" "}
                    €
                  </div>

                  <button
                    className="remove-button"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Entfernen
                  </button>
                </article>
              ))}
            </section>

            <section className="cart-summary">
              <span>Gesamtsumme</span>

              <strong>{cartTotal.toFixed(2).replace(".", ",")} €</strong>

              <button className="checkout-button">Zur Kasse</button>
            </section>
          </>
        )}
      </main>
    </div>
  );
}

export default Cart;
