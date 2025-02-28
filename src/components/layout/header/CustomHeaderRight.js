"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const CustomHeaderRight = () => {
  return (
    <div className="headerarea__right">
      <div className="headerarea__button">
        <ButtonPrimary
          text="Get Quote"
          className="bg__black"
          icon={false}
        />
      </div>
    </div>
  );
};

export default CustomHeaderRight;
