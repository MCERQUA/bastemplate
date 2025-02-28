"use client";
import AOS from "aos";
import Preloader from "../others/Preloader";
import { useEffect, useState } from "react";
import bootstrapCustom from "@/libs/bootstrap";
import HeaderContex from "@/providers/HeaderContex";
import Footer from "@/components/layout/footer/Footer";
import controllSwiper from "@/libs/controllSwiper";
import popupVideo from "@/libs/popupVideo";
import smoothScroll from "@/libs/smoothScroll";
import counterUP from "@/libs/counterUP";
import typeWriter from "@/libs/typeWriter";
import CustomHeader from "@/components/layout/header/CustomHeader";

let idx = 0;

const CustomPageWrapper = ({
  children,
  headerType,
  isNotHeaderTop,
}) => {
  const [bootstrap, setBootstrap] = useState(null);

  if (bootstrap && idx === 1) {
    bootstrap?.bootstrapMain();
  }

  useEffect(() => {
    //hover effect parallex
    import("vanilla-tilt").then(({ default: VanillaTilt }) => {
      VanillaTilt.init(document.querySelectorAll(".tilt"));
    });

    AOS.init({
      offset: 40,
      duration: 1000,
      once: true,
      easing: "ease",
    });
    bootstrapCustom(setBootstrap);
    controllSwiper();
    popupVideo();
    smoothScroll();
    counterUP();
    typeWriter();
  }, []);

  useEffect(() => {
    const body = document.querySelector("body");
    body.classList.add("bg__black");
  }, []);

  idx = idx + 1;

  return (
    <div className="main_wrapper overflow-hidden">
      {/* preloader */}
      <Preloader />

      {/* header */}
      <HeaderContex
        value={{
          style: 3,
          bg: "black",
          isOnepage: false,
          bodyBg: true,
          footerStyle: 3,
          headerType,
          isCollection: false,
          home: 6,
          isNotHeaderTop,
        }}
      >
        <CustomHeader />
        {/* main body */}
        {children}
      </HeaderContex>

      {/* footer */}
      <Footer style={3} footerBg="black" />
    </div>
  );
};

export default CustomPageWrapper;
