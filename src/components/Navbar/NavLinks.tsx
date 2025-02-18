import { useState, useEffect, useRef } from "react";
import NavItem from "./NavLink";

function NavLinks() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLUListElement | null>(null);
  const dropdownButtonRef = useRef<HTMLLIElement | null>(null);

  // Open the dropdown on hover
  const handleMouseEnter = () => setIsDropdownOpen(true);
  const handleMouseLeave = () => setIsDropdownOpen(false);

  // Close the dropdown if clicked outside
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current && !dropdownRef.current.contains(event.target as Node) &&
      dropdownButtonRef.current && !dropdownButtonRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav>
      <ul className="flex justify-center space-x-6">
        <NavItem href="/">Home</NavItem>
        <NavItem href="/about-us">About</NavItem>
        <NavItem href="/courses">Courses</NavItem>

        {/* Pages dropdown */}
        <li
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={dropdownButtonRef}
        >
          <NavItem href="/categories">
            Pages
            <span
              className={`ml-2 transition-transform duration-300 ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            >
              &#9660;
            </span>
          </NavItem>

          {/* Dropdown menu */}
          <ul
            ref={dropdownRef}
            className={`absolute bg-white shadow-lg border border-gray-200 rounded-md mt-1 space-y-2 w-48 p-2 z-20 transition-opacity duration-300 ${
              isDropdownOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            {/* Grouping related pages */}
            <NavItem href="/instructors">Instructors</NavItem>
            <NavItem href="/auth/student-registration">Student Registration</NavItem>
            <NavItem href="/auth/instructor-registration">Instructor Registration</NavItem>
            <NavItem href="/auth/login">Login</NavItem>
            <NavItem href="/auth/register">Register</NavItem>

            <NavItem href="/cart">Cart</NavItem>
            <NavItem href="/checkout">Checkout</NavItem>
            <NavItem href="/events">Events</NavItem>

            <NavItem href="/pricing">Pricing</NavItem>
            <NavItem href="/faq">FAQ</NavItem>
            <NavItem href="/testimonials">Testimonials</NavItem>
          </ul>
        </li>

        <NavItem href="/blog">Blog</NavItem>
        <NavItem href="/contact-us">Contact</NavItem>
      </ul>
    </nav>
  );
}

export default NavLinks;
