import NotFoundPage from "@/components/pages/not-found-page/NotFoundPage";
import {Metadata} from "next";

export const metadata: Metadata = {
	title: 'Сторінку не знайдено',
};

export default function NotFound() {
	return <NotFoundPage/>;
}