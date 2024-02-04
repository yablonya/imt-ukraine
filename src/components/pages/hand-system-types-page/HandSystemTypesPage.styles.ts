import {SxProps, Theme} from "@mui/system";

export const imageBlock: SxProps<Theme> = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	position: 'relative',
	color: {
		mobile: 'white',
		desktopSemiMedium: 'black',
	},
	'&::before': {
		display: {
			mobile: 'block',
			desktopSemiMedium: 'none',
		},
		content: '""',
		background: 'black',
		position: 'absolute',
		zIndex: '0',
		top: '0',
		left: '0',
		opacity: '0.85',
		height: '100%',
		width: '100%',
	}
}

export const imageBlockText: SxProps<Theme> = {
	textAlign: {
		mobile: 'left',
		tablet: 'center',
	},
	position: {
		mobile: 'absolute',
		desktopSemiMedium: 'relative',
	},
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	left: '25px',
	right: '25px',
	height: '100%',
}

export const imageBlockTitle: SxProps<Theme> = {
	m: {
		mobile: 0,
		desktopSemiMedium: '80px 0 13px',
	},
	typography: {
		mobile: 'h3',
		desktopSemiMedium: 'h1',
	},
}

export const imageBlockSubtitle: SxProps<Theme> = {
	mb: '16px',

	display: {
		mobile: 'none',
		desktopSemiMedium: 'block',
	}
}

export const systemTypes: SxProps<Theme> = {
	position: 'relative',
	display: 'flex',
	transition: 'all 0.5s ease-out',
	gap: '25px',
	flexDirection: {
		mobile: 'column',
		desktopMedium: 'row',
	},
	justifyContent: {
		mobile: 'flex-start',
		desktopMedium: 'space-between',
	},
	margin: {
		mobile: '30px 25px 50px',
		desktopSemiMedium: '80px 50px 60px',
	}
}