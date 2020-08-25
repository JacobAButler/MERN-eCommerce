import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import cartSlice from '../slices/cartSlice';
import userSlice from '../slices/userSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartSlice,
    user: userSlice,
  },
});
