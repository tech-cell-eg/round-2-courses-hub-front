import { useParams, Link } from "react-router-dom";
import { shoppingCardsDetails } from "./data";
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterestP } from "react-icons/fa";
import AddReveiwForm from "./AddReveiwForm";
import { ShoppCardProps } from "../../types/types";
import { useCart } from "../../context/CartContext";

// First Section (Product Details)
const ProductDetails = ({ shopCard }: { shopCard: ShoppCardProps }) => {
    const { cart, addToCart, increaseQuantity, decreaseQuantity } = useCart();

    console.log("Cart before adding: ", cart);

    const cartItem = cart.find((item) => item.id === shopCard.id);
    const quantity = cartItem?.quantity || 0;

    const handleAddToCart = () => {
        if (cartItem) {
            increaseQuantity(shopCard.id);
        } else {
            addToCart({
                id: shopCard.id,
                name: shopCard.name,
                price: shopCard.currentPrice,
                img: shopCard.img,
                quantity: 1,
                totalItemPrice: shopCard.currentPrice,
            });
        }
    };


    return (
        <div className="flex flex-col md:flex-row gap-10">
            <img src={shopCard.img} alt={shopCard.name} className="w-full md:w-[40%] h-fit rounded-lg shadow-lg" />

            <div className="flex flex-col gap-5">
                <h2 className="text-lg md:text-xl lg:text-2xl font-bold">{shopCard.name}</h2>
                <p><span className="text-yellow-500">⭐⭐⭐⭐</span> <span className="text-gray-600">(25 Customer reviews)</span></p>
                <p className="font-bold md:text-lg">
                    ${typeof shopCard.currentPrice === "number" ? shopCard.currentPrice : "0.00"}
                </p>

                <p>In today's online world, a brand’s success lies in combining technological planning and social strategies to draw customers in and keep them coming back.</p>

                {/* Quantity Section */}
                <div className="flex gap-5 items-center">
                    <h3 className="font-bold">Quantity</h3>
                    <div className="flex items-center border border-gray-300 rounded-md">
                        <button
                            type="button"
                            onClick={() => decreaseQuantity(shopCard.id)}
                            className="bg-gray-50 py-1 px-3 border-r"

                        >
                            -
                        </button>
                        <span className="px-4">{quantity}</span>
                        <button
                            type="button"
                            onClick={handleAddToCart} 
                            className="bg-gray-50 py-1 px-3 border-l"
                        >
                            +
                        </button>

                    </div>
                    <Link
                        to={`/cart`}
                        onClick={handleAddToCart}
                        className="bg-purple-400 hover:bg-purple-500 text-white py-2 px-4 rounded"
                    >
                        ADD TO CART
                    </Link>
                </div>

                {/* Product Details */}
                <p><span className="font-bold">SKU:</span> 1234</p>
                <p><span className="font-bold">Category:</span> Drama</p>
                <p><span className="font-bold">Tag:</span> Accessories, Business</p>

                {/* Social Sharing */}
                <div className="flex gap-3 items-center">
                    <p className="font-bold md:text-lg">Share:</p>
                    <a href="https://www.facebook.com/" aria-label="Share on Facebook" className="hover:text-blue-600"><FaFacebookF /></a>
                    <a href="#" aria-label="Share on Instagram" className="hover:text-pink-500"><FaInstagram /></a>
                    <a href="#" aria-label="Share on Twitter" className="hover:text-blue-400"><FaTwitter /></a>
                    <a href="#" aria-label="Share on Pinterest" className="hover:text-red-600"><FaPinterestP /></a>
                </div>
            </div>
        </div >
    );
};


// Description Section
const ProductDescription = () => {
    return (
        <div className="bg-purple-100 rounded-sm p-10">
            <h2 className="text-lg md:text-xl font-bold mb-3">Our Description:</h2>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
                corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
        </div>
    );
};

// Reviews Section
const ProductReviews = ({ shopCard }: { shopCard: ShoppCardProps }) => {
    return (
        <div className="flex flex-col gap-8">
            <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl">Client Reviews</h2>
            <div>
                <div className="flex gap-5">
                    <img src="/client.png" alt="User" className="w-14 h-14 rounded-full" />
                    <div className="flex flex-col gap-3">
                        <p className="text-lg font-bold">{shopCard.name}{' / '}
                            <span className="text-sm text-gray-400">10/10 - 2022-12-12</span>
                        </p>
                        <span className="text-yellow-500">⭐⭐⭐⭐</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
            <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl">Add Your Review</h2>
            <AddReveiwForm />
        </div>
    );
};

// Main ShopDetails Component
const ShopDetails = () => {
    const { id } = useParams();
    const shopCard = id ? shoppingCardsDetails.find((shopDetails) => shopDetails.id === Number(id)) : null;

    if (!shopCard) {
        return <p className="text-center text-lg font-semibold py-10">Product not found.</p>;
    }

    return (
        <section className="flex flex-col gap-6 md:gap-10 lg:gap-20 py-10 md:py-20">
            <ProductDetails shopCard={shopCard} />
            <ProductDescription />
            <ProductReviews shopCard={shopCard} />
        </section>
    );
};

export default ShopDetails;
