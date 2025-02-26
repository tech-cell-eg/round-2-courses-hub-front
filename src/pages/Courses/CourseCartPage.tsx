import { Link } from 'react-router-dom';

import { useCourserCart } from '../../context/CourseCartContext';
import { useEffect } from 'react';

const CourseCartPage = () => {
  const { cart, totalCartPrice, removeFromCart } = useCourserCart();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

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
                <th className="border border-gray-300 p-2">Course Name</th>
                <th className="border border-gray-300 p-2">Total</th>
                <th className="border border-gray-300 p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id} className="text-center">
                  <td className="border border-gray-300 p-2">
                    <img
                      src={`../${item.image}`}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                  </td>
                  <td className="border border-gray-300 p-2">
                    <Link
                      to={`/courses/${item.id}`}
                      className="hover:text-[#7768E5]"
                    >
                      {item.name}
                    </Link>
                  </td>
                  <td className="border border-gray-300 p-2">{item.price}</td>
                  <td className="border border-gray-300">
                    <button
                      className="bg-red-500 text-sm py-2 px-4 text-white rounded-full scale"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {cart.length > 0 && (
        <div className=" flex flex-col  max-w-md gap-4">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">Cart Totals</h2>
          <div className=" border-1 border-gray-300 text-gray-500">
            <div className="flex justify-between py-2 px-4">
              <p>Total</p>
              <span>{totalCartPrice.toFixed(2)}</span>
            </div>
          </div>
          <Link
            to={`/checkout`}
            className="bg-purple-500 w-fit hover:bg-purple-600 text-white uppercase py-3 px-6 rounded-sm upprcase"
          >
            proceed to checkout
          </Link>
        </div>
      )}
    </div>
  );
};

export default CourseCartPage;
