import { useEffect, useState } from "react";

const useWindowWidth = () => {
	const [windowWidth, setWindowWidth] = useState(NaN);

	useEffect(() => {
		function handleResize() {
			setWindowWidth(window.innerWidth);
		}

		window.addEventListener('resize', handleResize);

		handleResize();

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return windowWidth;
}

export default useWindowWidth;