import { createSlice } from '@reduxjs/toolkit';
import { internet } from 'faker';

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
        totalCost: 0,
    },
    reducers: {
        add: (state, action) => {

            state.cartList.push(action.payload);
            let costOfItem = action.payload.item.product_price*action.payload.quantity;
            state.totalCost+=costOfItem;

        },
        remove: state => {
            console.log('remove reducer not completed')
            
        },
        increment: (state,action) => {

            state.cartList.forEach(element => {
                if(element.item._id===action.payload.item.item._id)
                {
                    // find out the cost of the product and how many the user has in the cart
                    // multiply them to get its total cost in the cart
                    let currentCost=element.item.product_price*element.quantity;
                    // remove this amount from the cart
                    state.totalCost-=currentCost;

                    // set the new quantity in the cart
                    element.quantity=action.payload.quantity

                    // add the new total to the cart total
                    let newCost = element.item.product_price*element.quantity;
                    state.totalCost+=newCost;
                }
                else{console.log('not found')}
            });
        },
        decrement: state => {
            console.log('here in dec');
            
        },
        manualChange: state => {
            console.log('here in manualChange');
            
        },
        clear: state => {
            console.log('here in clear');
            state.cartList=[];
            state.totalCost=0;

        },
        checkout: state => {
            console.log('here in checkout');
            
        },
    },
});

export const { add, remove, increment, decrement, manualChange, clear, checkout} = cartSlice.actions;

export const getCart = state => state.cart.cartList;

export const getCartTotal = state => state.cart.totalCost;

export default cartSlice.reducer;