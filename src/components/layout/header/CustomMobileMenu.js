"use client";
import Link from "next/link";

const CustomMobileMenu = () => {
  return (
    <div className="mobile__menu__items">
      <div className="mobile__menu__items__inner">
        <nav>
          <ul>
            <li>
              <Link href="/home-6">HOME</Link>
            </li>
            <li>
              <Link href="/services/1">SERVICES</Link>
            </li>
            <li>
              <Link href="/about">ABOUT</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
            <li>
              <Link href="/blogs">BLOG</Link>
            </li>
            <li>
              <Link href="/contact">CONTACT</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default CustomMobileMenu;
