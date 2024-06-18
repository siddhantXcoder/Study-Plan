import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    loading: false,
    error: null
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload;
        },
        clearUser(state) {
            state.user = null;
        }
    }
});

export const { setUser, clearUser } = profileSlice.actions;
export default profileSlice.reducer;
