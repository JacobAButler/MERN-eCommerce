import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        loggedInUser: '',
        authToken: ''
    },
    reducers: {
        login: state => {
            state.user = 'this';
        },

        logout: state => {
            state.user = null;
        },
    },
});

export const { login, logout} = userSlice.actions;

export default userSlice.reducer;