import MainPage from "@/components/pages/main-page/MainPage";
import {Metadata} from "next";

export const metadata: Metadata = {
	title: 'Головна | IMTU',
};

export default function Home() {
  return <MainPage/>;
}
