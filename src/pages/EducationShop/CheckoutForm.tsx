import { useForm } from "react-hook-form";
import { CheckoutFormProps } from "../../types/types"

const CheckoutForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormProps>();

  const onSubmit = (data: CheckoutFormProps) => {
    console.log("Form Submitted:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full p-6  shadow-md rounded-lg"
    >
      <h2 className="text-2xl font-semibold mb-4">Billing Details</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">First Name *</label>
          <input
            {...register("firstName", { required: "First name is required" })}
            className="w-full p-2 border rounded border-gray-300"
          />
          {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">Last Name *</label>
          <input
            {...register("lastName", { required: "Last name is required" })}
            className="w-full p-2 border rounded border-gray-300"
          />
          {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
        </div>
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium">Country *</label>
        <input
          {...register("country", { required: "Country is required" })}
          className="w-full p-2 border rounded border-gray-300"
        />
        {errors.country && <p className="text-red-500 text-sm">{errors.country.message}</p>}
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium">Address *</label>
        <input
          {...register("address", { required: "Address is required" })}
          className="w-full p-2 border rounded border-gray-300"
        />
        {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium">City *</label>
        <input
          {...register("city", { required: "City is required" })}
          className="w-full p-2 border rounded border-gray-300"
        />
        {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium">Postcode</label>
        <input
          {...register("postcode",)}
          className="w-full p-2 border rounded border-gray-300"
        />
        {errors.postcode && <p className="text-red-500 text-sm">{errors.postcode.message}</p>}
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium">Phone *</label>
        <input
          {...register("phone", { required: "Phone number is required" })}
          className="w-full p-2 border rounded border-gray-300"
        />
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium">Email *</label>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/, message: "Invalid email format" },
          })}
          className="w-full p-2 border rounded border-gray-300"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium">Order Notes</label>
        <textarea
          {...register("notes")}
          className="w-full p-2 border rounded border-gray-300"
          rows={3}
          placeholder="Additional instructions (optional)"
        />
      </div>
      {/* Create an Account Checkbox */}
      <div className="mt-4 flex items-center gap-2">
        <input
          type="checkbox"
          {...register("createAccount")}
          className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
        />
        <label className="text-gray-700 cursor-pointer">Create an account?</label>
      </div>


      <button
        type="submit"
        className="mt-6 w-full bg-purple-600 text-white py-3 px-6 rounded hover:bg-purple-700 transition"
      >
        Place Order
      </button>
    </form>
  );
};

export default CheckoutForm;
