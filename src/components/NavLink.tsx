import { NavLink } from "react-router-dom";
import { ReactNode } from "react";

const NavItem = ({ href, children }: { href: string; children: ReactNode }) => (
  <li className="px-4 py-2 border-b border-gray-100 text-sm md:text-md lg:text-lg hover:bg-gray-100">
    <NavLink
      to={href}
      className={({ isActive }) =>
        isActive ? "bg-gray-50" : ""
      }
    >
      {children}
    </NavLink>
  </li>
);

export default NavItem;
