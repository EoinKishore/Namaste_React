import { useDispatch, useSelector } from "react-redux";
import CategoryItems from "./CategoryItems";
// import { clearCart } from "../utils/CartStore";
import { clearCart } from "../utils/CartStore";

const CartComponent = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }
    return (
        <div>
            <div className="w-full flex justify-center text-2xl font-bold m-2 p-2">Cart</div>
            <div className="w-full flex justify-end m-2 p-2">
                <button className="bg-amber-100 text-amber-800 p-2 m-2 rounded border border-amber-800" onClick={handleClearCart}>Clear Cart</button>
            </div>
            <div className="w-6/12 mx-auto">
                <CategoryItems categoryItems={cartItems} isCart={true} />
            </div>
        </div>
    )
}
export default CartComponent;