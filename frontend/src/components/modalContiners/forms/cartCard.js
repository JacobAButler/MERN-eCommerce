import React from 'react';

import { useSelector, useDispatch} from 'react-redux';

import{remove,increment,decrement,clear,checkout,getCart, getCartTotal} from '../../../slices/cartSlice';



export const Cart = (
    {}
    
    )=> {
        const cartList = useSelector(getCart);
        const cartTotal= useSelector(getCartTotal);
        const dispatch = useDispatch();
        const style = {
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
            }
        let count =0;
        let total = 0;
        return (
            <div>
                <button
                    style={style}
                    onClick={() => {dispatch(clear()); }} >Clear Cart</button>
                {cartList.map((cartItem,index ) =>(
                    
                    <div key={index}>
                        <img className="cartItemImage" style={{width:200, height:100}} src ={cartItem.item.product_images[0]} style={{clear:'both',float:"left"}}></img>
                        <div className="cartItemCounterContainer" style = {{float:"left", paddingTop:'50px'}}>
                            <input className="cartItemCounter" type="number" id="quantity" name="quantity" min="1" max="5" value={cartItem.quantity} onChange={event => dispatch(increment({item:cartItem,quantity:event.target.value}))}></input>
                        </div>
                        <button style={style}  onClick={() => dispatch(remove({cartItem}))}>remove item</button>
                    </div>
                
                ))}

                {cartTotal}
            </div>
        );
    };
export default Cart;
