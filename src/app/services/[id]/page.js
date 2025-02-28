import ServiceDetailsMain from "@/components/layout/main/ServiceDetailsMain";
import ThemeController from "@/components/shared/others/ThemeController";
import CustomPageWrapper from "@/components/shared/wrappers/CustomPageWrapper";
import getAllServices from "@/libs/getAllServices";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Insurance Services | Comprehensive Coverage Solutions",
  description: "Detailed information about our professional insurance services and coverage options",
};

const services = getAllServices();

export default function ServicesDetails({ params }) {
  const { id } = params;
  const isExistService = services?.find(({ id: id1 }) => id1 === parseInt(id));
  
  if (!isExistService) {
    notFound();
  }
  
  return (
    <CustomPageWrapper>
      <ThemeController />
      <ServiceDetailsMain />
    </CustomPageWrapper>
  );
}
export async function generateStaticParams() {
  return services?.map(({ id }) => ({ id: id.toString() }));
}
