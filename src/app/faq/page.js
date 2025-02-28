import FaqMain from "@/components/layout/main/FaqMain";
import ThemeController from "@/components/shared/others/ThemeController";
import CustomPageWrapper from "@/components/shared/wrappers/CustomPageWrapper";

export const metadata = {
  title: "FAQ | Insurance Coverage Questions & Answers",
  description: "Find answers to common questions about our insurance policies, coverage options, and claims process",
};

export default function Faq() {
  return (
    <CustomPageWrapper>
      <ThemeController />
      <FaqMain />
    </CustomPageWrapper>
  );
}
