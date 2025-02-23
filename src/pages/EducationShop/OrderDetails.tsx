import { useState } from "react";
import { useCart } from "../../context/CartContext";
import OrderFaq from "./OrderFaq";

const ShoppingOptions = ({ setShippingCost }: { setShippingCost: (cost: number) => void }) => {
  const [selectedOption, setSelectedOption] = useState("free");

  const handleSelection = (option: string, cost: number) => {
    setSelectedOption(option);
    setShippingCost(cost);
  };

  return (
    <div className="flex flex-col gap-3 p-4 rounded-lg">
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          name="shipping"
          value="flat"
          checked={selectedOption === "flat"}
          onChange={() => handleSelection("flat", 7)}
          className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 "
        />
        <span className="text-gray-700">Flat Rate: $7.00</span>
      </label>

      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          name="shipping"
          value="free"
          checked={selectedOption === "free"}
          onChange={() => handleSelection("free", 0)}
          className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300  "
        />
        <span className="text-gray-700">Free Shipping</span>
      </label>
    </div>
  );
};

function OrderDetails() {
  const { cart, totalCartPrice } = useCart();
  const [shippingCost, setShippingCost] = useState(0);

  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Billing Details</h2>

      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="py-2 px-4 text-left font-semibold text-gray-700">Product</th>
            <th className="py-2 px-4 text-right font-semibold text-gray-700">Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id} className="border-b border-gray-200">
              <td className="text-gray-500 py-2 px-4">{item.name}</td>
              <td className="text-gray-500 py-2 px-4 text-right">${item.totalItemPrice}</td>
            </tr>
          ))}
          <tr className="border-b border-gray-200">
            <td className="text-gray-500 py-2 px-4">Cart Subtotal</td>
            <td className="text-gray-500 py-2 px-4 text-xl text-right">${totalCartPrice}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="text-gray-500 py-2 px-4">Shipping</td>
            <td className="text-gray-500 py-2 px-4">
              <ShoppingOptions setShippingCost={setShippingCost} />
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="text-gray-500 py-2 px-4">Order Total</td>
            <td className="text-blue-950 py-2 px-4 text-xl text-right">
              ${totalCartPrice + shippingCost}
            </td>
          </tr>
        </tbody>
      </table>
      {/* faq  */}
      <div>
      <OrderFaq/>
      </div>

    </div>
  );
}

export default OrderDetails;
