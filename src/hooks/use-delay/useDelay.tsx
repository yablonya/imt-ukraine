import { useState, useEffect } from 'react';

const useDelay = (delay: number) => {
	const [state, setState] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setState(true);
		}, delay);

		return () => clearTimeout(timer);
	}, [delay]);

	return state;
}

export default useDelay;
