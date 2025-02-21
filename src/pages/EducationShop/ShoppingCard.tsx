import { ShoppCardProps } from "../../types/types";
import { Link } from "react-router-dom";


function ShoppingCard({ card }: { card: ShoppCardProps }) {
  return (
    <div className="rounded-lg shadow-md hover:shadow-lg transition flex flex-col gap-4 justify-between pb-10 h-full relative">
      <div
        className={`absolute top-5 left-0 w-[50px] h-[20px] flex items-center justify-center 
      text-white rounded-r-full shadow-md text-sm 
      ${card.discount === "None" ? "bg-green-400" : "bg-red-400"}`}
      >
        <span>{card.discount === "None" ? "New" : card.discount}</span>
      </div>
      {/* Image */}
      <img src={card.img} alt={card.name} className="w-full  object-cover rounded-md" />

      {/* Content */}
      <div className="px-3 flex flex-col gap-5 flex-grow">
        {/* Title with fixed height */}
        <h3 className="text-lg font-semibold mt-2 text-center min-h-[48px]">
          {card.name}
        </h3>

        {/* Pricing & Rating */}
        <div className="flex justify-between items-center flex-grow">
          <div className="flex items-center text-red-500 font-bold">
            <span>{card.currentPrice}</span>
            <span className="line-through text-gray-400 ml-2">{card.lastPrice}</span>
          </div>
          <p className="text-yellow-500">⭐ {card.rating}</p>
        </div>

        {/* Button */}
        <Link
          to={``}
          className="bg-purple-50 px-3 py-3 rounded-lg text-purple-500 text-center font-bold text-lg mt-auto"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
}


export default ShoppingCard;
