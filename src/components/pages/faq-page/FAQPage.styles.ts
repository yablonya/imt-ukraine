import {SxProps, Theme} from "@mui/system";

export const faqPage: SxProps<Theme> = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	margin: {
		mobile: '0 25px 50px',
		desktopSemiMedium: '0 50px 60px'
	},
}

export const faqHeader: SxProps<Theme> = {
	typography: {
		mobile: 'h4',
		desktopSemiMedium: 'h2',
	},
	textAlign: {
		mobile: 'left',
		desktopSemiMedium: 'center'
	},
	margin: {
		mobile: '30px 10px 25px',
		desktopSemiMedium: '50px 0 30px'
	},
}

export const questionsBlock: SxProps<Theme> = {
	maxWidth: '800px',
	display: 'flex',
	flexDirection: 'column',
	gap: {
		mobile: '25px',
		desktopSemiMedium: '30px',
	},
}