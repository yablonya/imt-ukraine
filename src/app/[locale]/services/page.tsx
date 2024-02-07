import ServicesPage from "@/components/pages/services-page/ServicesPage";
import {Metadata} from "next";

export const metadata: Metadata = {
	title: 'Послуги | IMTU',
};

export default function Services() {
  return <ServicesPage/>;
}