import './styles.css';
import {Link} from "react-router-dom";

interface ProductThumbnailProps {
  id: number;
  imageUrl: string;
  name: string;
  currentPrice: number;
  originalPrice: number;
  discount: number;
  rating: number;
  reviewCount: number;
  showAddToCart?: boolean;
  isNewProduct?: boolean;
}

const ProductThumbnail: React.FC<ProductThumbnailProps> =
  ({
     id,
     imageUrl,
     name,
     currentPrice,
     originalPrice,
     discount,
     rating,
     reviewCount,
     isNewProduct = false,
     showAddToCart = false,
   }) => {
    return (
      <div className="container product-thumbnail">

        <div className="image-wrapper">
          <div className="thumbnail-header">
            {discount > 0 && (
              <div className="top-left-badge discount">-{discount}%</div>

            )}

            {isNewProduct && (
              <div className="top-left-badge new-product">New</div>
            )}

            <div className="top-right-icons">
              <button className="icon-button">❤️</button>
              <button className="icon-button">👁</button>
            </div>
          </div>

          <div className="product-image">
            <Link to={`/products/${id}`} target="_self">
              <img src={imageUrl} alt={name}/>
            </Link>
            <div className="add-to-cart">
              <button className="bnt-add-to-cart">
                Add To Cart
              </button>
            </div>
          </div>


        </div>


        <div className="product-info">
          <h3 className="product-name">{name}</h3>
          <div className="price">
            <span className="current">${currentPrice}</span>
            {
              originalPrice >= currentPrice &&
              (
                <span className="original">${originalPrice}</span>
              )
            }
          </div>

          <div className="rating">
            {Array.from({length: 5}, (_, i) => (
              <span key={i} className={i < Math.round(rating) ? 'star filled' : 'star'}>★</span>
            ))}
            <span className="reviews">({reviewCount})</span>
          </div>
        </div>
      </div>
    )
  }

export default ProductThumbnail;