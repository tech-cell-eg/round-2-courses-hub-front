import { Link } from "react-router-dom";

import { useCart } from "../../context/CartContext";
import AddCouponForm from "./AddCouponForm";

const CartPage = () => {
    const { increaseQuantity, decreaseQuantity, cart, totalCartPrice } = useCart();
    console.log("total price", totalCartPrice);
    console.log("items", cart);


    return (
        <div className="p-4 flex flex-col gap-8">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold ">Shopping Cart</h2>

            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="overflow-x-auto flex flex-col gap-8">
                    <table className="w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border border-gray-300 p-2">Image</th>
                                <th className="border border-gray-300 p-2">Product</th>
                                <th className="border border-gray-300 p-2">Unit Price</th>
                                <th className="border border-gray-300 p-2">Quantity</th>
                                <th className="border border-gray-300 p-2">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item) => (
                                <tr key={item.id} className="text-center">
                                    <td className="border border-gray-300 p-2">
                                        <img src={item.img} alt={item.name} className="w-16 h-16 object-cover rounded" />
                                    </td>
                                    <td className="border border-gray-300 p-2">{item.name}</td>
                                    <td className="border border-gray-300 p-2">{item.price}</td>
                                    <td className="border border-gray-300 p-2">
                                        <div className="flex items-center justify-center gap-2">
                                            <button
                                                onClick={() => decreaseQuantity(item.id)}
                                                className="px-2 py-1 bg-gray-300 rounded"
                                            >
                                                -
                                            </button>
                                            <span>{item.quantity}</span>
                                            <button
                                                onClick={() => increaseQuantity(item.id)}
                                                className="px-2 py-1 bg-gray-300 rounded"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </td>
                                    <td className="border border-gray-300 p-2 font-bold">{item.totalItemPrice}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="flex justify-between">
                        <AddCouponForm />
                        <Link to={`/education-shop`} className="bg-purple-500 hover:bg-purple-600 text-white uppercase py-2 px-4 rounded-sm">update cart</Link>
                    </div>
                </div>
            )}

            {cart.length > 0 && (
                <div className=" flex flex-col  max-w-md gap-4">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">Cart Totals</h2>
                    <div className=" border-1 border-gray-300 text-gray-500">
                        <div className="border-b-1 border-gray-300 flex justify-between py-2 px-4">
                            <p>Subtotal</p>
                            <span>{totalCartPrice}</span>
                        </div>
                        <div className="flex justify-between py-2 px-4">
                            <p>Total</p>
                            <span>{totalCartPrice}</span>
                        </div>
                    </div>
                    <Link to={`/checkout`} className="bg-purple-500 w-fit hover:bg-purple-600 text-white uppercase py-3 px-6 rounded-sm upprcase">proceed to checkout</Link>
                </div>
            )}
        </div>
    );
};

export default CartPage;
