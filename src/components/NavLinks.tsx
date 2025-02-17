import NavItem from "./NavLink";
function NavLinks() {
  return (
    <nav className="">
      <ul className="flex justify-center">
        <NavItem href="/">Home</NavItem>
        <NavItem href="/about-us">About</NavItem>
        <NavItem href="/courses">Courses</NavItem>
        <NavItem href="/categories">Pages</NavItem>
        <NavItem href="/blog">Blog</NavItem>
        <NavItem href="/contact-us">Contact</NavItem>
      </ul>
    </nav>
  );
}

export default NavLinks;
