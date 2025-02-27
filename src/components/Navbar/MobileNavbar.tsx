import NavBtn from './NavBtn';
import NavItem from './NavLink';

interface MobileNavbarProps {
  closeMenu: () => void;
}

function MobileNavbar({ closeMenu }: MobileNavbarProps) {
  return (
    <div
      className="bg-white w-[250px] px-6 pb-10 shadow-md absolute top-12 right-0 z-50 transition-transform transform translate-x-0"
      onClick={closeMenu}
    >
      <ul className="space-y-4">
        <NavItem href="/">Home</NavItem>
        <NavItem href="/about-us">About</NavItem>
        <NavItem href="/courses">Courses</NavItem>

        {/* Pages Dropdown */}
        <li className="relative">
          <NavItem href="/categories">Pages</NavItem>
          <ul className="ml-4 mt-2 space-y-2">
            {/* Grouping related pages */}
            <NavItem href="/instructors">Instructors</NavItem>

            {/* Authentication */}
            <NavItem href="/auth/student-registration">Student Registration</NavItem>
            <NavItem href="/auth/instructor-registration">
              Instructor Registration
            </NavItem>
            <NavItem href="/auth/login">Login</NavItem>
            <NavItem href="/auth/register">Register</NavItem>

            {/* Shop-related pages */}
            <NavItem href="/education-shop">Shop</NavItem>
            <NavItem href="/cart">Cart</NavItem>
            <NavItem href="/checkout">Checkout</NavItem>

            {/* Other pages */}
            <NavItem href="/events">Events</NavItem>
            <NavItem href="/pricing">Pricing</NavItem>
            <NavItem href="/faq">FAQ</NavItem>
            <NavItem href="/testimonials">Testimonials</NavItem>
          </ul>
        </li>

        <NavItem href="/blog">Blog</NavItem>
        <NavItem href="/contact-us">Contact</NavItem>

        <NavBtn />
      </ul>
    </div>
  );
}

export default MobileNavbar;
