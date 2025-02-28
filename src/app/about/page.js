import AboutMain from "@/components/layout/main/AboutMain";
import ThemeController from "@/components/shared/others/ThemeController";
import CustomPageWrapper from "@/components/shared/wrappers/CustomPageWrapper";

export const metadata = {
  title: "About Us | Professional Insurance Agency",
  description: "Learn about our insurance agency's history, values, and commitment to protecting what matters most to you",
};

export default function About() {
  return (
    <CustomPageWrapper>
      <ThemeController />
      <AboutMain />
    </CustomPageWrapper>
  );
}
