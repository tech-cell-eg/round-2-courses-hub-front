import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Courses from "./pages/Courses/Courses";
import CourseDetails from "./pages/Courses/CourseDetails";
import Categories from "./pages/Categories/Categories";
import CategoryDesc from "./pages/Categories/CategoryDesc";
import Instructors from "./pages/Instructors/Instructors";
import InstructorProfile from "./pages/Instructors/InstructorProfile";
import Pricing from "./pages/Pricing";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Testimonial from "./pages/Testimonial";
import FAQ from "./pages/FAQ";
import Blog from "./pages/Blog/Blog";
import BlogDetails from "./pages/Blog/BlogDetails";
import BlogSidebar from "./pages/Blog/BlogSidebar";
import EducationShop from "./pages/EducationShop/EducationShop";
import ShopDetails from "./pages/EducationShop/ShopDetails";
import CartPage from "./pages/EducationShop/CartPage";
import Checkout from "./pages/EducationShop/Checkout";
import StudentRegistration from "./pages/Auth/StudentRegistration";
import InstructorRegistration from "./pages/Auth/InstructorRegistration";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import NotFound from "./pages/NotFound";
import Events from "./pages/Events/Event";
import EventDetails from "./pages/Events/EventDetails";

const App: React.FC = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/courses/:id" element={<CourseDetails />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/categories/:id" element={<CategoryDesc />} />
                <Route path="/instructors" element={<Instructors />} />
                <Route
                    path="/instructors/:id"
                    element={<InstructorProfile />}
                />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/testimonials" element={<Testimonial />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/sidebar" element={<BlogSidebar />} />
                <Route path="/blog/:id" element={<BlogDetails />} />
                <Route path="/education-shop" element={<EducationShop />} />
                <Route path="/shop/:id" element={<ShopDetails />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route
                    path="/auth/student-registration"
                    element={<StudentRegistration />}
                />
                <Route
                    path="/auth/instructor-registration"
                    element={<InstructorRegistration />}
                />
                <Route path="/auth/login" element={<Login />} />
                <Route path="/auth/register" element={<Register />} />
                <Route path="/events" element={<Events />} />
                <Route path="/events/:id" element={<EventDetails />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
