
function AddCouponForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const couponCode = (e.target as HTMLFormElement).coupon.value;
        console.log("Applying Coupon:", couponCode);
      }}
      className="flex items-center  gap-2  rounded-sm   "
    >
      <input
        type="text"
        name="coupon"
        placeholder="Coupon code"
        className="block  px-3 py-2 border border-gray-300 rounded-sm outline-none "
      />
      <button
        type="submit"
        className="block w-full bg-purple-500 text-white px-6 py-2 hover:bg-purple-600 transition rounded-sm"
      >
        APPLY COUPON
      </button>
    </form>

  );
}

export default AddCouponForm;
