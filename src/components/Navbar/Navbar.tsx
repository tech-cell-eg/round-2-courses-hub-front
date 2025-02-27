import { useState } from 'react';
import NavLinks from './NavLinks';
import NavBtn from './NavBtn';
import MobileNavbar from './MobileNavbar';
import { CiMenuBurger } from 'react-icons/ci';
import Logo from '/Logo.png';
import { useAuth } from '../../context/AuthContext';
import { FaCartShopping } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { token } = useAuth();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <section className="flex justify-between md:items-center px-5 md:px-10 py-3 bg-white relative border-b-1 border-gray-200">
      <div className="">
        <img src={Logo} alt="logo" className="w-[200px] h-[50px]" />
        {/* <h1 className="font-bold text-2xl md:text-3xllg:text-4xl text-blue-950 inline">edunity</h1> */}
      </div>
      {/* Desktop Navbar */}
      <div className="hidden md:flex justify-center">
        <NavLinks />
      </div>
      {/* Mobile Navbar */}
      <div className="md:hidden flex  items-center gap-3">
        {token !== null && (
          <Link to="/courses/cart">
            <FaCartShopping className="text-2xl" />
          </Link>
        )}
        <CiMenuBurger
          className="text-3xl font-extrabold cursor-pointer hover:text-blue-950 transition duration-200"
          onClick={toggleMobileMenu}
        />
        {isMobileMenuOpen && <MobileNavbar closeMenu={closeMobileMenu} />}
      </div>
      {/* Account Button */}
      <div className="hidden md:flex gap-3 items-center">
        {token !== null && (
          <Link to="/courses/cart">
            <FaCartShopping className="text-2xl" />
          </Link>
        )}
        <NavBtn />
      </div>
    </section>
  );
};

export default Navbar;
