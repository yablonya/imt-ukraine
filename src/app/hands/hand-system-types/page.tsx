import HandSystemTypesPage from "@/components/pages/hand-system-types-page/HandSystemTypesPage";
import {Metadata} from "next";

export const metadata: Metadata = {
	title: 'Типи ручної системи VHP | IMTU',
};

export default function HandSystems() {
	return <HandSystemTypesPage/>;
}