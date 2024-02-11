import {FC} from "react";
import {Link, Typography} from "@mui/material";
import {usePathname} from "next/navigation";

import * as styles from "../../DesktopHeader.styles";

interface DesktopHeaderLinkProps {
	label: string;
	href: string;
}

const DesktopHeaderLink: FC<DesktopHeaderLinkProps> = ({
	label,
	href,
	...rest
}) => {
	const currentPage = usePathname().split('/');
	const linkPage = href.split('/');

	return (
		<Link
			href={href}
			sx={styles.link(currentPage[currentPage.length - 1], linkPage[linkPage.length - 1])}
			{...rest}
		>
			<Typography variant='h6'>{label}</Typography>
		</Link>
	);
}

export default DesktopHeaderLink;