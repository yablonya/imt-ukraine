import HandsPage from "@/components/pages/hands-page/HandsPage";
import {Metadata} from "next";

export const metadata: Metadata = {
	title: 'Руки | IMTU',
};

export default function Hands() {
	return <HandsPage/>;
}