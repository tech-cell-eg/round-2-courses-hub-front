import { useForm } from "react-hook-form";
import { InstructorRegistrationProps } from "../../types/types";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import axios from "axios";

export default function InstructorForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<InstructorRegistrationProps>();

  const API_URL =
    import.meta.env.VITE_BASE_URL ||
    "https://round2-courses-hub.digital-vision-solutions.com/api";

  const onSubmit = async (data: InstructorRegistrationProps) => {
    try {
      console.log("Submitting Data:", data);

      if (data.password.length < 8) {
        alert("Password must be at least 8 characters.");
        return;
      }

      const formData = new FormData();
      formData.append("first_name", data.first_name);
      formData.append("last_name", data.last_name);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("gender", data.gender.toLowerCase());
      formData.append("birth_date", data.birth_date);
      formData.append("nationality", data.nationality);
      formData.append("country", data.country);
      formData.append("city", data.city);
      formData.append("first_address", data.first_address);
      formData.append("second_address", data.second_address || "");
      formData.append("zip_code", data.zip_code);
      formData.append("password", data.password);
      formData.append("confirm_password", data.confirm_password);
      formData.append("intended_study_field", data.intended_study_field);
      formData.append("degree-sought", data.degree_sought); 
      formData.append("begin-studies", data.begin_studies); 

      // Handle File Upload
      const file = watch("choose_file")?.[0];
      if (file) {
        console.log(file);

        formData.append("choose_file", file.name);
      } else {
        formData.append("choose_file", "profile.jpg");
      }

      await submitForm(formData);
    } catch (error: any) {
      console.error("Error submitting form:", error.response?.data || error);
      alert("An error occurred while submitting the form.");
    }
  };


  const submitForm = async (formData: FormData) => {
    const response = await axios.post(`${API_URL}/instructor/register`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log("Response:", response.data);
    alert("Registration Successful!");
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full p-6 flex flex-col gap-2">
      {[
        { name: "first_name", label: "First Name", type: "text", required: true },
        { name: "last_name", label: "Last Name", type: "text", required: true },
        { name: "email", label: "Email", type: "email", required: true },
        { name: "phone", label: "Phone", type: "tel", required: true },
        { name: "gender", label: "Gender", type: "text", required: true },
        { name: "birth_date", label: "Birth Date", type: "date", required: true },
        { name: "nationality", label: "Nationality", type: "text", required: true },
        { name: "country", label: "Country", type: "text", required: true },
        { name: "city", label: "City", type: "text", required: true },
        { name: "first_address", label: "First Address", type: "text", required: true },
        { name: "second_address", label: "Second Address", type: "text" },
        { name: "zip_code", label: "Zip Code", type: "text", required: true },
        { name: "password", label: "Password", type: "password", required: true },
        { name: "confirm_password", label: "Confirm Password", type: "password", required: true },
        { name: "intended_study_field", label: "Intended Study Field", type: "text", required: true },
        { name: "degree_sought", label: "Degree Sought", type: "text", required: true },
        { name: "begin_studies", label: "Begin Studies", type: "date", required: true },
      ].map(({ name, label, type, required }) => (
        <div key={name}>
          <label className="block mt-2 mb-1 font-semibold">
            {label} {required && <span className="text-red-500">*</span>}
          </label>
          <input
            {...register(name as keyof InstructorRegistrationProps, {
              required: required ? `${label} is required` : false,
            })}
            type={type}
            className="w-full p-2 border rounded-md border-gray-400"
          />
          {errors[name as keyof InstructorRegistrationProps] && (
            <p className="text-red-500">{errors[name as keyof InstructorRegistrationProps]?.message}</p>
          )}
        </div>
      ))}

      {/* File Input */}
      <div>
        <label className="block mt-2 mb-1 font-semibold">
          Choose File <span className="text-red-500">*</span>
        </label>
        <input
          {...register("choose_file", {
            required: "File is required",
          })}
          type="file"
          className="w-full p-2 border rounded-md border-gray-400"
        />
        {errors.choose_file && <p className="text-red-500">{errors.choose_file.message}</p>}
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-5">
        <button
          type="submit"
          className="flex items-center bg-purple-500 text-white px-5 py-3 rounded-full hover:bg-purple-600 transition"
        >
          <span className="pr-2">Submit Now</span>
          <FaArrowRight />
        </button>
        <button
          type="button"
          onClick={() => navigate("/")}
          className="flex items-center bg-red-500 text-white px-5 py-3 rounded-full hover:bg-red-600 transition"
        >
          <span className="pr-2">Cancel</span>
          <FaArrowRight />
        </button>
      </div>
    </form>
  );
}
