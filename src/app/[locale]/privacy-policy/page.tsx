import PrivacyPolicyPage from "@/components/pages/privacy-policy-page/PrivacyPolicyPage";
import {Metadata} from "next";

export const metadata: Metadata = {
	title: 'Політика конфіденційності | IMTU',
};

export default function PrivacyPolicy() {
	return <PrivacyPolicyPage/>;
}