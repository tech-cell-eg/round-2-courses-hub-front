import { useForm } from "react-hook-form";


interface FormData {
    name: string;
    email: string;
    message: string;
}

const ContactForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log("Form Data:", data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="p-6 ">
            {/* Name & Email on the same line */}
            <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                    <label className="block font-medium mb-1">Name</label>
                    <input
                        type="text"
                        {...register("name", { required: "Name is required" })}
                        className="w-full border border-gray-300 p-2 rounded-md focus:outline-none  "
                    />
                    {errors.name?.message && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                </div>

                <div className="flex-1">
                    <label className="block font-medium mb-1">Email</label>
                    <input
                        type="email"
                        {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email" } })}
                        className="w-full border border-gray-300 p-2 rounded-md focus:outline-none "
                    />
                    {errors.email?.message && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>
            </div>

            {/* Message Textarea */}
            <div className="mt-4">
                <label className="block font-medium mb-1">Message</label>
                <textarea
                    {...register("message", { required: "Message is required" })}
                    className="w-full border border-gray-300 p-2 rounded-md h-32 focus:outline-none "
                ></textarea>
                {errors.message?.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
            </div>

            {/* Submit Button */}
            <button type="submit" className="mt-4 bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition">
                SEND MESSAGE
            </button>
        </form>
    );
};

export default ContactForm;
