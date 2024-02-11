import AboutUsPage from "@/components/pages/about-us-page/AboutUsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: 'Про нас | IMTU',
};

export default function AboutUs() {
  return <AboutUsPage/>;
}