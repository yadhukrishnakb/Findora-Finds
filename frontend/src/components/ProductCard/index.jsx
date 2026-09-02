import "./index.css";

const ProductCard = ({ productDetails }) => {
  const { title, imageUrl, productLink } = productDetails;

  const handlePurchase = () => {
    window.open(productLink, "_blank", "noopener,noreferrer");
  };

  return (
    <li className="product-card">
      <a href={productLink} target="_blank" rel="noopener noreferrer">
        <img src={imageUrl} className="product-image" alt={title} />
        <p className="product-title">{title}</p>
      </a>

      <button type="button" className="purchase-link" onClick={handlePurchase}>
        Buy Now <span>→</span>
      </button>
    </li>
  );
};

export default ProductCard;
