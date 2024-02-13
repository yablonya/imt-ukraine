import {Box, Divider, Link, Typography} from "@mui/material";
import * as styles from './NotFoundPage.styles'

const NotFoundPage = () => {
	return (
		<Box sx={styles.page}>
			<Typography sx={styles.title}>404</Typography>
			<Divider sx={styles.divider}/>
			<Typography variant='h5'>Page not found</Typography>
			<Link href={'/'} sx={styles.toMainLink}>To the main page</Link>
		</Box>
	);
}

export default NotFoundPage;