import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items:[],
    },
    reducers: {
        addItem : (state, action) => {
            //mutating the state here
            state.items.push(action.payload);
        },
        removeItem : (state, action) => {
            state.items.pop();
        },
        clearCart : (state) => {
            //either Mutate the existing state or return a new state
            state.items.length = 0;
        }
    }
});
export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;