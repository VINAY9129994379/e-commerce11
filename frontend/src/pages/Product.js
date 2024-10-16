import React, { useContext, useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import './Product.css';
import { assets } from '../assets/assets';
import RelatedProduct from '../components/RelatedProduct';

function Product() {
  const { productId } = useParams(); 
  const { products, currency ,addToCart} = useContext(ShopContext); 
  const [productData, setProductData] = useState(null); 
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  const fetchProductData = useCallback(() => {
    const product = products.find((item) => item._id === productId);
    if (product) {
      setProductData(product);
      if (product.image && product.image.length > 0) {
        setImage(product.image[0]); // Set the first image as default
      }
    }
  }, [productId, products]);

  useEffect(() => {
    fetchProductData();
  }, [productId, fetchProductData]);

  return productData ? (
    <div className="product">
      <div className="product-container">
        {/* Product image and thumbnails */}
        <div className="product-images">
          <div className="thumbnails">
            {productData.image && productData.image.length > 0 ? (
              productData.image.map((item, index) => (
                <img
                  onClick={() => setImage(item)}
                  src={item}
                  key={index}
                  alt={`Product thumbnail ${index}`}
                  className="thumbnail-img"
                />
              ))
            ) : (
              <p>No images available</p>
            )}
          </div>
          <div className="main-image-container">
            <img src={image} alt="Selected product" className="main-product-img" />
          </div>
        </div>

        {/* Product information */}
        <div className="product-info">
          <h1 className="product-name">{productData.name}</h1>

          {/* Product rating */}
          <div className="product-rating">
            {Array(4)
              .fill()
              .map((_, i) => (
                <img
                  key={i}
                  src={assets.star_icon} // Adjust path for star icons
                  alt="Star"
                  className="star-img"
                />
              ))}
            <img
              src={assets.star_dull_icon} // Adjust path for dull star icon
              alt="Dull star"
              className="star-img"
            />
            <p className="rating-count">(122)</p>
          </div>

          <p className="product-price">
            {currency}{productData.price}
          </p>
          <p className="product-description">{productData.description}</p>

          {/* Size selection */}
          <div className="product-size-selection">
            <p className="size-selection-title">Select Size</p>
            <div className="size-buttons">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  key={index}
                  className={`size-button ${item === size ? 'border-orange-500' : ''}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Add to cart button */}
          <button onClick={()=>addToCart(productData._id,size)} className="add-to-cart-button">Add To Cart</button>
          <hr className="divider" />

          {/* Product notes */}
          <div className="product-notes">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* Product description section */}
      <div className="product-description-section">
        <div className="description-header">
          <strong>Descriptions</strong>
          <p className="review-count">Reviews (122)</p>
        </div>
        <div className="full-description">
          <p>E-commerce, or electronic commerce, is the buying and selling of goods and services online</p>
          <p>E-commerce, or electronic commerce, is the buying and selling of goods and services online</p>

        </div>
      </div>
      <RelatedProduct category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ) : (
    <div className="loading-message">Loading...</div>
  );
}

export default Product;
