import React from 'react';
import noImage from '../../../../Images/noImage.png'

export const Form = ({
  onSubmit,
  product
}) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="imageCarousel">
        <img style={{width: 400, height: 200}} src={noImage} alt={noImage}/>
      </div>
      <div className="productInfo">
        <h1 className ="productName">{product.product_name}</h1>
        <p className = "productInfo">{product.product_description}</p>
        <p className = "productPrice">{product.product_price}</p>
      </div>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input className="form-control" id="name" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="name@example.com"
        />
      </div>
      <div className="form-group">
        <button className="form-control btn btn-primary" type="submit">
          Submit{product.product_description}
        </button>
      </div>
    </form>
  );
};
export default Form;
