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

interface Route {
    path: string;
    component: React.FC;
    pageName: string;
}

export const routes: Route[] = [
    { path: "/", component: Home, pageName: "Home" },
    { path: "/courses", component: Courses, pageName: "Courses" },
    {
        path: "/courses/:id",
        component: CourseDetails,
        pageName: "Course Details",
    },
    { path: "/categories", component: Categories, pageName: "Categories" },
    {
        path: "/categories/:id",
        component: CategoryDesc,
        pageName: "Category Description",
    },
    { path: "/instructors", component: Instructors, pageName: "Instructors" },
    {
        path: "/instructors/:id",
        component: InstructorProfile,
        pageName: "Instructor Profile",
    },
    { path: "/pricing", component: Pricing, pageName: "Pricing" },
    { path: "/about-us", component: AboutUs, pageName: "About Us" },
    { path: "/contact-us", component: ContactUs, pageName: "Contact Us" },
    { path: "/testimonials", component: Testimonial, pageName: "Testimonials" },
    { path: "/faq", component: FAQ, pageName: "FAQ" },
    { path: "/blog", component: Blog, pageName: "Blog" },
    { path: "/blog/sidebar", component: BlogSidebar, pageName: "Blog Sidebar" },
    { path: "/blog/:id", component: BlogDetails, pageName: "Blog Details" },
    {
        path: "/education-shop",
        component: EducationShop,
        pageName: "Education Shop",
    },
    { path: "/shop/:id", component: ShopDetails, pageName: "Shop Details" },
    { path: "/cart", component: CartPage, pageName: "Cart" },
    { path: "/checkout", component: Checkout, pageName: "Checkout" },
    {
        path: "/auth/student-registration",
        component: StudentRegistration,
        pageName: "Student Registration",
    },
    {
        path: "/auth/instructor-registration",
        component: InstructorRegistration,
        pageName: "Instructor Registration",
    },
    { path: "/auth/login", component: Login, pageName: "Login" },
    { path: "/auth/register", component: Register, pageName: "Register" },
    { path: "/events", component: Events, pageName: "Events" },
    { path: "/events/:id", component: EventDetails, pageName: "Event Details" },
    { path: "*", component: NotFound, pageName: "Not Found" },
    { path: "404", component: NotFound, pageName: "Not Found" },
];
