import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice ({
    name: 'product',
    initialState:
    {
        products:[],
    },
    reducers:
    {
        add: (state,action) => {
            state.products = action.payload
        },

        clear: (state) =>
        {
            state.products=[];
        }
    },
});


export const { add, clear } = productSlice.actions;

export const getProducts = state => {
    if(state.products===null)
    {return null;}
    else return state.products;
}

export default productSlice.reducer;






//  make up own shifts
//  pay period mon - sun
//  ot only if you have raised 2500 or more on cc
//  times to log on are on LMS
//  