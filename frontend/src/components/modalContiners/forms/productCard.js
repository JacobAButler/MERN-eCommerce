import React from 'react';
import noImage from '../../../Images/noImage.png';

import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
//import { Footer } from 'react-image-carousel/lib/Footer';

import { add, getCart } from '../../../slices/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

function createImageContainer(images)
{
  return(
      images.map((image,index) => (
        <div key={index}>
          <img src={image} alt={noImage} />
        </div>
      ))
      )
}

function cartCheck(cart, product)
{
  let isItemInCart=false;
  cart.forEach(element => {


    if(element.item._id==product._id)
    {
      isItemInCart=true
    }
  });
  return isItemInCart;
}
export const ProductCard = ({ 
  onSubmit,
  product
 }) => {
  const cartList = useSelector(getCart);
  const dispatch = useDispatch();
  return (
    <div>
    <form onSubmit={onSubmit}>
      <div className="imageCarousel">
        <Carousel>
          {createImageContainer(product.product_images)}
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
        onClick={() => {

          if(cartCheck(cartList,product)==false)
          {
            dispatch(add({item:product,quantity:1}))

          }
        }}
        
      >Add to Cart</button>
    </div>
  );
};
export default ProductCard;