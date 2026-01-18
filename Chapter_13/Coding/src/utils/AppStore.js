import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartStore";
const AppStore = configureStore({
    reducer: {
        cart: CartReducer
    }
});
export default AppStore;