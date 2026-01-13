import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loaduser: (state, action) => {
            // state.data = action.payload;
            // console.log(action);
            state.users = action.payload
        },
        removeuser: (state, action) => {
          state.users = null
        }
    },
});

export const {loaduser, removeuser} = userSlice.actions;

export default userSlice.reducer;