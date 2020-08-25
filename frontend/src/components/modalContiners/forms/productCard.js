import React from 'react';
import noImage from '../../../Images/noImage.png';

import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
//import { Footer } from 'react-image-carousel/lib/Footer';

import { add } from '../../../slices/cartSlice';
import { useDispatch } from 'react-redux';

function foo(images)
{
  return(
      images.map(image => (
        <div>
          <img src={image} alt={noImage} />
        </div>
      ))
      )
}
export const ProductCard = ({ 
  onSubmit,
  product
 }) => {
  const dispatch = useDispatch();
  return (
    <div>
    <form onSubmit={onSubmit}>
      <div className="imageCarousel">
        <Carousel>
          {foo(product.product_images)}
        </Carousel>
      </div>
      <div className="productInfo">
        <h1 className ="productName">{product.product_name}</h1>
        <p className = "productInfo">{product.product_description}</p>
        <p className = "productPrice">{product.product_price}</p>

      </div>
      
    </form>
    <button
        style={{
          width: "150px",
          borderRadius: "3px",
          letterSpacing: "1.5px",
          marginTop: "1rem",
          backgroundColor: '#306bc9',
          border: 'none',
          color: 'white',
          padding: '10px 22px',
          textAlign: 'center',
          textDecoration: 'none',
          display: 'inline-block',
          fontSize: '18px',
        }}
        onClick={() => dispatch(add())}
        
      >Add to Cart</button>
    </div>
  );
};
export default ProductCard;