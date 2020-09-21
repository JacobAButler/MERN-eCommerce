import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, getProducts } from '../slices/productSlice';
import Product from './Product';



export const SetProducts = ({
    payload,
}) => {
    const dispatch = useDispatch();
    console.log(payload)
    dispatch(add(payload))
    
    return(
        null
    );
};

export const GetProducts = ({
    
}) => {
    let products = useSelector(getProducts)
    console.log(products.products);

    return products.products.map(product =>(
        <Product key={product.id} product={product} />
    ));
}



//export default SetData;
