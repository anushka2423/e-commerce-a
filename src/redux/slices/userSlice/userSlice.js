import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        token: null,
        username: null,
    },
    reducers: {
        login: (state, action) => {
            state.username = action.payload.username;
            state.token = action.payload.token;
        },
        logout: (state) => {
            state.token = null;
            state.username = null;
        },
    },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;