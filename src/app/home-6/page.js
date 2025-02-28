import Home6Main from "@/components/layout/main/Home6Main";
import ThemeController from "@/components/shared/others/ThemeController";
import CustomPageWrapper from "@/components/shared/wrappers/CustomPageWrapper";

export const metadata = {
  title: "Insurance Services | Business Insurance Solutions",
  description: "Professional insurance services and solutions for your business needs",
};

export default function Home6() {
  return (
    <CustomPageWrapper>
      <ThemeController />
      <Home6Main />
    </CustomPageWrapper>
  );
}
