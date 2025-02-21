import InstructorForm from "./InstructorForm";

const InstructorRegistration = () => {
    return (
        <section className="py-10">
            <section className="flex flex-col p-10 bg-gray-100 gap-5">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">INSTRUCTOR REGISTRATION</h1>
                <h2 className="lg:text-lg text-gray-600 font-bold">Field With * Are Required</h2>
                <p className="">welcome in our platform, here you can achieve your goal in teaching </p>
                <InstructorForm />
            </section>
        </section>

    )
};

export default InstructorRegistration;
