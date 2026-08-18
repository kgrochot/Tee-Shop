import { useRef } from "react";
import { Link } from "react-router-dom";

function CategoryCard({
  number,
  title,
  description,
  image,
}) {
  const cardRef = useRef(null);

  const handleMouseMove = (event) => {
    const card = cardRef.current;

    if (!card) return;

    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 4;
    const rotateX = ((centerY - y) / centerY) * 4;

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-6px)
    `;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;

    cardRef.current.style.transform = "";
  };

  return (
    <Link
      ref={cardRef}
      to="/shop"
      className="category-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="category-card-image">
        <img src={image} alt="" />
      </div>

      <div className="category-card-overlay" />

      <div className="category-card-content">
        <span>{number}</span>

        <h3>{title}</h3>

        <p>{description}</p>
      </div>
    </Link>
  );
}

export default CategoryCard;