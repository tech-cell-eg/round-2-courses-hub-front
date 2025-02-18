const FooterSubscribe = () => {
    return (
        <div className=" p-4 rounded-lg flex flex-col  ">
            <h1 className="text-white text-xl font-semibold mb-3">Subscribe</h1>
            <form className="w-full flex flex-col gap-2">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full py-4 px-2 rounded-lg border border-gray-300 focus:outline-none 
                    bg-white focus:ring-2 focus:ring-white
                    placeholder:text-gray-600"


                />
                <button
                    type="submit"
                    className="w-[70%]  bg-[rgba(252,100,65,1)] font-semibold py-4 rounded-lg transition cursor-pointer"
                >
                    Subscribe
                </button>
            </form>
        </div>
    );
};

export default FooterSubscribe;
