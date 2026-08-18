import products from "../data/products";

function Shop() {
  return (
    <main className="shop-page">
      <section className="shop-header">
        <p className="eyebrow">TEA ATELIER</p>

        <h1>Unsere Tees</h1>

        <p>
          Entdecke ausgewählte Teesorten für besondere
          Genussmomente.
        </p>
      </section>

      <section className="product-grid">
        {products.map((product) => (
          <article className="product-card" key={product.id}>
            <div className="product-image">
              <img
                src={product.image}
                alt={product.name}
              />
            </div>

            <div className="product-info">
              <p className="product-category">
                {product.category}
              </p>

              <h2>{product.name}</h2>

              <p className="product-description">
                {product.shortDescription}
              </p>

              <div className="product-bottom">
                <span>
                  {product.price.toFixed(2).replace(".", ",")} €
                </span>

                <button>Entdecken</button>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Shop;