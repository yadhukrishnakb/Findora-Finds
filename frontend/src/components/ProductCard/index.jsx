import "./index.css"

const ProductCard = ({ productDetails }) => {
    const { title, imageUrl, productLink } = productDetails

    return (
        <li className="product-card">
            <a
                href={productLink}
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    src={imageUrl}
                    className="product-image"
                    alt={title}
                />
                <p className="product-title">{title}</p>
            </a>
            <a href={productLink} rel="noopener noreferrer" target="_blank" className="purchase-link">Buy Now ~
            </a>
        </li>
    )
}

export default ProductCard