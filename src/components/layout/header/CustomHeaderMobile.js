"use client";
import LogoHeader from "./LogoHeader";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const CustomHeaderMobile = () => {
  return (
    <div className="mobile__menu">
      <div className="mobile__menu__wrapper">
        <div className="mobile__menu__logo">
          <LogoHeader />
        </div>
        <div className="mobile__menu__right">
          <div className="mobile__menu__button">
            <ButtonPrimary
              text="Get Quote"
              className="bg__black"
              icon={false}
            />
          </div>
          <div className="mobile__menu__toggle">
            <button className="menu-toggle">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomHeaderMobile;
