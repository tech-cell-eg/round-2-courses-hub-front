import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL =
  import.meta.env.VITE_BASE_URL ||
  "https://round2-courses-hub.digital-vision-solutions.com/api/student/register";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  phone: Yup.string()
    .matches(/^\d{10,11}$/, "Phone must be 10-11 digits")
    .required("Phone is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
});

const StudentRegistration = () => {
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await axios.post(API_URL, values);
        console.log("Registration Successful:", response.data);

        if (response.data.token) {
          setToken(response.data.token);
        }

        toast.success("Account Created!", {
          position: "bottom-left",
          autoClose: 3000,
        });

        resetForm();
        navigate("/");
      } catch (error) {
        console.error("Registration Failed:", error);
        toast.error("Registration Failed. Please try again.");
      }
    },
  });

  return (
    <div className="py-20">
      <form
        className="bg-[#F3F5F5] w-full lg:px-32 sm:px-8 px-2 py-16"
        onSubmit={formik.handleSubmit}
      >
        <h3 className="uppercase text-4xl font-bold text-[#0E2A46] mb-8">
          Student Registration
        </h3>

        <label className="flex flex-col mb-4 gap-1">
          <span className="font-bold">Name *</span>
          <input
            type="text"
            placeholder="Your Name"
            className="bg-white py-2 px-4 outline-none border border-transparent focus:border-[#7768E5]"
            {...formik.getFieldProps("name")}
          />
          {formik.touched.name && formik.errors.name && (
            <div className="text-red-500 text-sm">{formik.errors.name}</div>
          )}
        </label>

        <label className="flex flex-col mb-4 gap-1">
          <span className="font-bold">Email *</span>
          <input
            type="email"
            placeholder="Email"
            className="bg-white py-2 px-4 outline-none border border-transparent focus:border-[#7768E5]"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500 text-sm">{formik.errors.email}</div>
          )}
        </label>

        <label className="flex flex-col mb-4 gap-1">
          <span className="font-bold">Phone *</span>
          <input
            type="text"
            placeholder="Phone Number"
            className="bg-white py-2 px-4 outline-none border border-transparent focus:border-[#7768E5]"
            {...formik.getFieldProps("phone")}
          />
          {formik.touched.phone && formik.errors.phone && (
            <div className="text-red-500 text-sm">{formik.errors.phone}</div>
          )}
        </label>

        <label className="flex flex-col mb-4 gap-1">
          <span className="font-bold">Password *</span>
          <input
            type="password"
            placeholder="Password"
            className="bg-white py-2 px-4 outline-none border border-transparent focus:border-[#7768E5]"
            {...formik.getFieldProps("password")}
          />
          {formik.touched.password && formik.errors.password && (
            <div className="text-red-500 text-sm">{formik.errors.password}</div>
          )}
        </label>

        <button
          className="bg-[#7768E5] text-white py-2 px-10 rounded w-full"
          type="submit"
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? "Loading..." : "Create Account"}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default StudentRegistration;
