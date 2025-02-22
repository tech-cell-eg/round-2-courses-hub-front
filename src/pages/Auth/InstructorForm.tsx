import { useForm } from "react-hook-form";
import { InstructorRegistrationProps } from "../../types/types";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export default function InstructorForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<InstructorRegistrationProps>();

  const onSubmit = (data: InstructorRegistrationProps) => {
    console.log("Form Submitted:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full p-6 flex flex-col gap-2">
      {/* Email */}
      <label className="block mb-1 font-semibold">
        Email <span className="text-red-500">*</span>
      </label>
      <input {...register("email", { required: "Email is required" })} type="email" className="w-full p-2 border border-gray-400 rounded-md" />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}

      {/* Password */}
      <label className="block mt-2 mb-1 font-semibold">
        Password <span className="text-red-500">*</span>
      </label>
      <input {...register("password", { required: "Password is required", minLength: 6 })} type="password" className="w-full p-2 border rounded-md border-gray-400" />
      {errors.password && <p className="text-red-500">Password must be at least 6 characters</p>}
      {/* Confirm Password */}
      <label className="block mt-2 mb-1 font-semibold">
        Confirm Password <span className="text-red-500">*</span>
      </label>
      <input
        {...register("confirmPassword", {
          required: "Confirm Password is required",
          validate: (value) =>
            value === watch("password") || "Passwords do not match",
        })}
        type="password"
        className="w-full p-2 border rounded-md border-gray-400"
      />
      {errors.confirmPassword && (
        <p className="text-red-500">{errors.confirmPassword.message}</p>
      )}


      {/* First Name */}
      <label className="block mt-2 mb-1 font-semibold">
        First Name <span className="text-red-500">*</span>
      </label>
      <input {...register("firstName", { required: "First Name is required" })} className="w-full p-2 border rounded-md border-gray-400" />
      {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}

      {/* Birth Date */}
      <label className="block mt-2 mb-1 font-semibold">
        Birth Date <span className="text-red-500">*</span>
      </label>
      <input {...register("birthDate", { required: "Birth Date is required" })} type="date" className="w-full p-2 border rounded-md border-gray-400" />
      {errors.birthDate && <p className="text-red-500">{errors.birthDate.message}</p>}

      {/* Nationality */}
      <label className="block mt-2 mb-1 font-semibold">
        Nationality <span className="text-red-500">*</span>
      </label>
      <input {...register("nationality", { required: "Nationality is required" })} className="w-full p-2 border rounded-md border-gray-400" />
      {errors.nationality && <p className="text-red-500">{errors.nationality.message}</p>}

      {/* Address */}
      <label className="block mt-2 mb-1 font-semibold">
        Address <span className="text-red-500">*</span>
      </label>
      <input {...register("address1", { required: "Address is required" })} className="w-full p-2 border rounded-md border-gray-400" />
      {errors.address1 && <p className="text-red-500">{errors.address1.message}</p>}

      {/* Country */}
      <label className="block mt-2 mb-1 font-semibold">
        Country <span className="text-red-500">*</span>
      </label>
      <input {...register("country", { required: "Country is required" })} className="w-full p-2 border rounded-md border-gray-400" />
      {errors.country && <p className="text-red-500">{errors.country.message}</p>}

      {/* City */}
      <label className="block mt-2 mb-1 font-semibold">
        City <span className="text-red-500">*</span>
      </label>
      <input {...register("city", { required: "City is required" })} className="w-full p-2 border rounded-md border-gray-400" />
      {errors.city && <p className="text-red-500">{errors.city.message}</p>}

      {/* Postcode */}
      <label className="block mt-2 mb-1 font-semibold">Postcode</label>
      <input {...register("postcode")} className="w-full p-2 border rounded-md border-gray-400" />


      {/* Phone */}
      <label className="block mt-2 mb-1 font-semibold">
        Phone <span className="text-red-500">*</span>
      </label>
      <input {...register("phone", { required: "Phone is required" })} type="tel" className="w-full p-2 border rounded-md border-gray-400" />
      {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}

      {/* Begin Studies */}
      <label className="block mt-2 mb-1 font-semibold">
        Begin Studies <span className="text-red-500">*</span>
      </label>
      <input {...register("beginStudies", { required: "Begin Studies date is required" })} type="date" className="w-full p-2 border rounded-md border-gray-400" />
      {errors.beginStudies && <p className="text-red-500">{errors.beginStudies.message}</p>}

      {/* Degree Selection */}
      <label className="block mt-2 mb-1 font-semibold">
        Degree <span className="text-red-500">*</span>
      </label>
      <select {...register("degree", { required: "Degree is required" })} className="w-full p-2 border rounded-md border-gray-400">
        <option value="">Select Degree</option>
        <option value="bachelor">Bachelor</option>
        <option value="master">Master</option>
        <option value="phd">PhD</option>
      </select>
      {errors.degree && <p className="text-red-500">{errors.degree.message}</p>}

      {/* Study Field Selection */}
      <label className="block mt-2 mb-1 font-semibold">
        Study Field <span className="text-red-500">*</span>
      </label>
      <select {...register("studyField", { required: "Study Field is required" })} className="w-full p-2 border rounded-md border-gray-400">
        <option value="">Select Field</option>
        <option value="computer_science">Computer Science</option>
        <option value="engineering">Engineering</option>
        <option value="business">Business</option>
      </select>
      {errors.studyField && <p className="text-red-500">{errors.studyField.message}</p>}

      {/* Degree Sought Selection */}
      <label className="block mt-2 mb-1 font-semibold">
        Degree Sought <span className="text-red-500">*</span>
      </label>
      <select {...register("degreeSought", { required: "Degree Sought is required" })} className="w-full p-2 border rounded-md border-gray-400">
        <option value="">Select Degree Sought</option>
        <option value="undergraduate">Undergraduate</option>
        <option value="graduate">Graduate</option>
        <option value="postgraduate">Postgraduate</option>
      </select>
      {errors.degreeSought && <p className="text-red-500">{errors.degreeSought.message}</p>}

      {/* Submit and Cancel Buttons */}
      <div className="flex gap-4 mt-5">
        <button type="submit" className="flex items-center bg-purple-500 text-white px-5 py-3 rounded-full hover:bg-purple-600 transition">
          <span className="pr-2">Submit Now</span>
          <FaArrowRight />
        </button>
        <button type="button" onClick={() => navigate("/")} className="flex items-center bg-red-500 text-white px-5 py-3 rounded-full hover:bg-red-600 transition">
          <span className="pr-2">Cancel</span>
          <FaArrowRight />
        </button>
      </div>
    </form>
  );
}
