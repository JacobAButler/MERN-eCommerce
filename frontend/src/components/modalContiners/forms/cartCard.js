import React from 'react';

import { useSelector, useDispatch} from 'react-redux';

import{remove,increment,decrement,clear,checkout,getCart} from '../../../slices/cartSlice';

export const Cart = (
    {}
    
    )=> {
        const cartList = useSelector(getCart);
        const dispatch = useDispatch();
        let count =0;
        return (
            <div>
                {cartList.map((cartItem,index ) =>(
                    
                    <div key={index}>
                        {count,count++} {cartItem.item.product_name}
                    </div>
                ))}
            </div>
        );
    };
export default Cart;
