import BlogsMain from "@/components/layout/main/BlogsMain";
import ThemeController from "@/components/shared/others/ThemeController";
import CustomPageWrapper from "@/components/shared/wrappers/CustomPageWrapper";

export const metadata = {
  title: "Insurance Blog | Industry News & Tips",
  description: "Stay informed with the latest insurance industry news, coverage tips, and risk management strategies",
};

export default function Blogs() {
  return (
    <CustomPageWrapper>
      <ThemeController />
      <BlogsMain />
    </CustomPageWrapper>
  );
}
