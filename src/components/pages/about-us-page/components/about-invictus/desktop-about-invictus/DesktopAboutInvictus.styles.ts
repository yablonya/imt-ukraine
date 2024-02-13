import {SxProps, Theme} from "@mui/system";
import theme from "@/styles/theme/theme";

export const aboutInvictusBlock: SxProps<Theme> = {
	display: {
		mobile: 'none',
		desktopSemiMedium: 'flex',
	},
	gap: '60px',
	margin: '60px 50px 60px',
}

export const aboutInvictusTextContainer: SxProps<Theme> = {
	display: 'flex',
	justifyContent: 'center',
	flexDirection: 'column',
	width: '100%',
}

export const aboutInvictusHeader: SxProps<Theme> = {
	mb: '25px',
	typography: {
		mobile: 'h4',
		desktopSemiMedium: 'h3',
	},
}

export const textBlockBorders: SxProps<Theme> = {
	borderLeft: '2px solid',
	borderRight: '2px solid',
	borderColor: theme.palette.blue[300],
	padding: '8px 10px 8px 0'
}

export const aboutInvictusText: SxProps<Theme> = {
	whiteSpace: 'pre-line',
	overflow: 'auto',
	height: {
		desktopSemiMedium: '300px',
		desktopMedium: '400px',
	},
	padding: '0 15px',
	'&::-webkit-scrollbar-thumb': {
		background: theme.palette.blue[800],
		borderRadius: '2px',
	},
	'&::-webkit-scrollbar': {
		width: '4px'
	}
}