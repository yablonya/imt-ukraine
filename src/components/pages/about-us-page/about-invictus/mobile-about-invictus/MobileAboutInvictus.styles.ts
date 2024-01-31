import {SxProps, Theme} from "@mui/system";

export const aboutInvictusBlock: SxProps<Theme> = {
	margin: '50px 0'
}

export const aboutInvictusHeader: SxProps<Theme> = {
	typography: {
		mobile: 'h4',
		desktopSemiMedium: 'h3',
	},
	padding: '20px 25px 20px',
}

export const aboutInvictusText: SxProps<Theme> = {
	typography: 'body1',
	padding: '0 25px',
}