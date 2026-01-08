import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        loadcart: (state, action) => {
            state.data = action.payload;
            console.log(action);
        }
    },
});

export const {loadcart} = cartSlice.actions;

export default cartSlice.reducer;