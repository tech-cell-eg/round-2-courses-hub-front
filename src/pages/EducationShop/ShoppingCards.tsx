import { useState } from "react";
import { shoppingCardsDetails } from "./data";
import { Link } from "react-router-dom";
import { ShoppCardProps } from "../../types/types";
import ShoppingCard from "./ShoppingCard";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const ITEMS_PER_PAGE = 8; 

const ShoppingCards = () => {
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate total pages
    const totalPages = Math.ceil(shoppingCardsDetails.length / ITEMS_PER_PAGE);

    // Get books for the current page
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const visibleBooks = shoppingCardsDetails.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    return (
        <div className="p-4">
            {/* Books Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {visibleBooks.map((card: ShoppCardProps) => (
                    <Link key={card.id} to={`/education-shop/${card.id}`}>
                        <ShoppingCard card={card} />
                    </Link>
                ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center items-center gap-2 mt-6">
                {/* Previous Page */}
                <button
                    title="previous"
                    type="button"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(currentPage - 1)}
                    className={`flex justify-center items-center text-white w-[40px] h-[40px] rounded-md bg-green-400 hover:bg-green-500 ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                    <FaArrowLeft />
                </button>

                {/* Page Numbers */}
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        title="next"
                        type="button"
                        key={index + 1}
                        onClick={() => setCurrentPage(index + 1)}
                        className={`flex justify-center items-center  w-[40px] h-[40px] rounded-md text-white ${currentPage === index + 1 ? "bg-purple-700 text-white font-bold" : "bg-purple-400 hover:bg-purple-500"}`}
                    >
                        {index + 1}
                    </button>
                ))}

                {/* Next Page */}
                <button
                    title="next"
                    type="button"
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(currentPage + 1)}
                    className={`flex justify-center items-center text-white w-[40px] h-[40px] rounded-md bg-green-400 hover:bg-green-500 ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                    <FaArrowRight />
                </button>
            </div>
        </div>
    );
};

export default ShoppingCards;
