"use client";

import { useEffect } from "react";
import mobileMenu from "@/libs/mobileMenu";
import CustomHeaderMobile from "./CustomHeaderMobile";
import { useHeaderContex } from "@/providers/HeaderContex";
import CustomMobileMenu from "./CustomMobileMenu";
import HeaderAnimate from "./HeaderAnimate";
import stickyHeader from "@/libs/stickyHeader";
import CustomHeaderLarge from "./CustomHeaderLarge";

const CustomHeader = () => {
  const { isNotHeaderTop } = useHeaderContex();

  useEffect(() => {
    mobileMenu();
    stickyHeader();
  }, []);

  return (
    <>
      {isNotHeaderTop ? "" : <HeaderAnimate />}
      <header>
        <div className="headerarea bg__black headerarea--3 header__sticky">
          <CustomHeaderLarge />
          <CustomHeaderMobile />
        </div>
      </header>
      <CustomMobileMenu />
    </>
  );
};

export default CustomHeader;
