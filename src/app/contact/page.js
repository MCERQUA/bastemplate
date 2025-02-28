import ContactMain from "@/components/layout/main/ContactMain";
import ThemeController from "@/components/shared/others/ThemeController";
import CustomPageWrapper from "@/components/shared/wrappers/CustomPageWrapper";

export const metadata = {
  title: "Contact Us | Insurance Support & Quotes",
  description: "Get in touch with our insurance experts for personalized quotes, policy information, or claims assistance",
};

export default function Contact() {
  return (
    <CustomPageWrapper>
      <ThemeController />
      <ContactMain />
    </CustomPageWrapper>
  );
}
