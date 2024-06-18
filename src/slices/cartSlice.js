import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
    totalItem: localStorage.getItem("totalItem") ? JSON.parse(localStorage.getItem("totalItem")) : 0
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        setTotalItem(state, action) { // Fixed: Use action.payload to access the payload
            state.totalItem = action.payload;
        }
    }
});

export const { setTotalItem } = cartSlice.actions;

export default cartSlice.reducer;
