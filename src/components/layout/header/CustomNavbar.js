"use client";
import NavItem from "./NavItem";

const CustomNavbar = () => {
  const navItems = [
    {
      name: "HOME",
      icon: false,
      path: "/home-6",
      dropdown: null,
    },
    {
      name: "SERVICES",
      icon: false,
      path: "/services/1",
      dropdown: null,
    },
    {
      name: "ABOUT",
      icon: false,
      path: "/about",
      dropdown: null,
    },
    {
      name: "FAQ",
      icon: false,
      path: "/faq",
      dropdown: null,
    },
    {
      name: "BLOG",
      icon: false,
      path: "/blogs",
      dropdown: null,
    },
    {
      name: "CONTACT",
      icon: false,
      path: "/contact",
      dropdown: null,
    },
  ];

  return (
    <div className="headerarea__component">
      <div className="headerarea__main__menu">
        <nav>
          <ul>
            {navItems?.map((navItem, idx) => (
              <NavItem key={idx} item={navItem} />
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default CustomNavbar;
