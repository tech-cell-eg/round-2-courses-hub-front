import NavItem from "./NavLink";

interface MobileNavbarProps {
  closeMenu: () => void; // Add a prop to close the menu
}

function MobileNavbar({ closeMenu }: MobileNavbarProps) {
  return (
    <div
      className="bg-white w-[250px] px-6  shadow-md absolute top-12 right-0 z-50 transition-transform transform translate-x-0"
      onClick={closeMenu} 
    >
      <ul className="space-y-4">
        <NavItem href="/">Home</NavItem>
        <NavItem href="/about-us">About</NavItem>
        <NavItem href="/courses">Courses</NavItem>
        <NavItem href="/categories">Pages</NavItem>
        <NavItem href="/blog">Blog</NavItem>
        <NavItem href="/contact-us">Contact</NavItem>
      </ul>
    </div>
  );
}

export default MobileNavbar;
