import {SxProps, Theme} from "@mui/system";

export const pageLayout: SxProps<Theme> = {
	maxWidth: '1000px',
	margin: '0 auto',
	padding: {
		mobile: '0 25px 50px',
		desktopSemiMedium: '15px 50px 60px',
	},
}

export const title: SxProps<Theme> = {
	margin: '35px 0 15px',
	typography: {
		mobile: 'h5',
		desktopSemiMedium: 'h4',
	}
}

export const text: SxProps<Theme> = {
	whiteSpace: 'pre-line',
	typography: {
		mobile: 'body2',
		desktopSemiMedium: 'body1',
	}
}