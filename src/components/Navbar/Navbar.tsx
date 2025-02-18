import { useState } from "react";
import NavLinks from "./NavLinks";
import NavBtn from "./NavBtn";
import MobileNavbar from "./MobileNavbar";
import { CiMenuBurger } from "react-icons/ci";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <section className="flex justify-between md:items-center px-5 md:px-10 py-3 bg-white relative border-b-1 border-gray-200">
      <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-blue-950">edunity</h1>

      {/* Desktop Navbar */}
      <div className="hidden md:flex justify-center">
        <NavLinks />
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden flex flex-col items-end gap-0">
        <CiMenuBurger
          className="text-3xl font-extrabold cursor-pointer"
          onClick={toggleMobileMenu}
        />
        {isMobileMenuOpen && (
          <MobileNavbar closeMenu={closeMobileMenu} />
        )}
      </div>

      {/* Account Button */}
      <div className="hidden md:block">
        <NavBtn />
      </div>
    </section>
  );
};

export default Navbar;
