import LogoHeader from "./LogoHeader";
import CustomNavbar from "./CustomNavbar";
import CustomHeaderRight from "./CustomHeaderRight";
import { useHeaderContex } from "@/providers/HeaderContex";

const CustomHeaderLarge = () => {
  const { headerType } = useHeaderContex();
  return (
    <div className={`${headerType === 3 ? "container-fluid full__width__padding" : "container"} desktop__menu__wrapper`}>
      <div className="headerarea__main__wrapper position-relative headerarea__main__wrapper--3">
        <div className="headerarea__component__wrap">
          {/* logo area */}
          <LogoHeader />

          {/* navbar */}
          <CustomNavbar />

          {/* header right */}
          <CustomHeaderRight />
        </div>
      </div>
    </div>
  );
};

export default CustomHeaderLarge;
