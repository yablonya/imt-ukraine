import {Box, Link, Theme, Typography} from "@mui/material";
import {FC, ReactNode} from "react";
import * as styles from './Tab.styles';
import {SxProps} from "@mui/system";
import {usePathname} from "next/navigation";

interface TabProps {
  startIcon: ReactNode;
  label: string;
  link: string;
	onClick?: () => void;
}

const Tab: FC<TabProps> = ({
	startIcon,
	label,
	link,
	onClick = () => {},
}) => {
	const currentPage = usePathname().split('/');
	const linkPage = link.split('/')

	return (
		<Link
			href={link}
			onClick={onClick}
			sx={styles.tabStyles(currentPage[currentPage.length - 1], linkPage[linkPage.length - 1])}
		>
			<Box sx={styles.iconContainer}>{startIcon}</Box>
			<Typography>{label}</Typography>
		</Link>
	);
};

export default Tab;