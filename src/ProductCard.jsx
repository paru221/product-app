function ProductCard({ name, category, price, image }) {
  return (
    <div className="card">
      <img src={image} className="product-image" />
      <h2>{name}</h2>
      <p>{category}</p>
      <h3>₹{price}</h3>
    </div>
  );
}

export default ProductCard;