import ContactUsPage from "@/components/pages/contact-us-page/ContactUsPage";
import {Metadata} from "next";

export const metadata: Metadata = {
	title: "Зв'яжіться з нами | IMTU",
};
export default function FAQ() {
	return <ContactUsPage/>;
}