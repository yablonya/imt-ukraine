import {FC, ReactNode} from "react";
import {Box, Link, Typography} from "@mui/material";
import * as styles from "./ContactLink.styles";

interface ContactLinkProps {
	icon: ReactNode,
	title: string,
	text: string,
	href: string,
}

const ContactLink: FC<ContactLinkProps> = ({
	icon,
	title,
	text,
	href,
	...rest
}) => {
	return (
		<Link
			href={href}
			sx={{textDecoration: 'none'}}
			target="_blank" rel="noreferrer"
			{...rest}
		>
			<Box sx={styles.link}>
				<Box sx={styles.linkIcon}>
					{icon}
				</Box>
				<Typography sx={styles.linkText}>
					{title}
				</Typography>
				<Typography sx={styles.linkHoverText}>
					{text}
				</Typography>
			</Box>
		</Link>
	);
}

export default ContactLink;