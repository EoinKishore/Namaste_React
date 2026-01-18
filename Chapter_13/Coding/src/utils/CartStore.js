import { createSlice } from "@reduxjs/toolkit"
const CartStore = createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action) => {
            state.items.push(action.payload);
        },
        removeItem:(state,actionn) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items = [];
        }
    }
})
export const {addItem,removeItem,clearCart} = CartStore.actions;
export default CartStore.reducer;