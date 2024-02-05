import FAQPage from "@/components/pages/faq-page/FAQPage";
import {Metadata} from "next";

export const metadata: Metadata = {
	title: 'FAQ | IMTU',
};

export default function FAQ() {
	return <FAQPage/>;
}