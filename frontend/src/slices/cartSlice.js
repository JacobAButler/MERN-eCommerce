import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice ({
    name: 'cart',
    initialState: {
        // this is just an empty list
        // as new items are added to the card
        // an object with this structure will be altered
        // {
        //     ItemID: '',
        //     ItemQuantity: int
        // }
        cartList: [],
    },
    reducers: {
        add: (state, action) => {
            // instead of having item checking logic here I should 
            // make a utility class that checks if the item exists in the cart
            // then decides which reducer to use
            //state.cartList.push({item:'this',quantity:1})
            state.cartList.push(action.payload);
        },
        remove: state => {
            
        },
        increment: state => {
            
        },
        decrement: state => {
            
        },
        manualChange: state => {
            
        },
        clear: state => {

        },
        checkout: state => {
            
        },
    },
});

export const { add, remove, increment, decrement, manualChange, clear, checkout} = cartSlice.actions;

export const getCart = state => state.cart.cartList;

export default cartSlice.reducer;