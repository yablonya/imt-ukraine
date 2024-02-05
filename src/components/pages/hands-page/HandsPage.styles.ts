import {SxProps, Theme} from "@mui/system";
import theme from "@/styles/theme/theme";

export const systemTypesBlock = (checked: boolean): SxProps<Theme> => ({
	display: 'flex',
	justifyContent: 'center',
	alignItems:'center',
	margin: {
		mobile: '0',
		desktopSemiMedium: '50px',
	},
	position: 'relative',
	'&::before': {
		transition: theme.transitions.create(['opacity'], {
			duration: theme.transitions.duration.standard,
		}),
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
		opacity: checked ? 0.85 : 0,
		height: '100%',
		width: '100%',
	}
});

export const systemTypes = (checked: boolean): SxProps<Theme> => ({
	transition: theme.transitions.create(['opacity'], {
		duration: theme.transitions.duration.standard,
	}),
	position: {
		mobile: 'absolute',
		desktopSemiMedium: 'relative',
	},
	pl: {
		mobile: '25px',
		desktopSemiMedium: '70px',
	},
	color: {
		mobile: 'white',
		desktopSemiMedium: 'black',
	},
	height: '100%',
	width: {
		mobile: '100%',
		desktopSemiMedium: 'auto',
	},
	opacity: {
		mobile: checked ? 1 : 0,
		desktopSemiMedium: 1,
	},
	display: 'flex',
	justifyContent: 'center',
	flexDirection: 'column',
});

export const systemTypesTitle: SxProps<Theme> = {
	typography: {
		mobile: 'h5',
		mobileSemiMedium: 'h4',
		desktop: 'h3',
	},
}

export const systemTypesText: SxProps<Theme> = {
	padding: {
		mobile: '15px 0',
		mobileSemiMedium: '25px 0',
	},
	typography: {
		mobile: 'body1',
		desktop: 'h6',
	},
}

export const learnMoreLink: SxProps<Theme> = {
	width: 'fit-content',
	textDecoration: 'underline 1px solid #1C6758',
	textUnderlineOffset: '7px',
	cursor: 'pointer',
	'&:hover': {
		color: {
			mobile: '#c9c9c9',
			desktopSemiMedium: '#575757',
		},
	},
	typography: {
		mobile: 'body1',
		desktop: 'h6',
	},
}

export const addOnsBlock: SxProps<Theme> = {
	margin: {
		mobile: '50px 25px 50px',
		desktopSemiMedium: '0 50px 60px 70px',
	},
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	gap: {
		mobile: '130px',
		mobileSemiMedium: '170px',
		tablet: '70px',
	},
	flexDirection: {
		mobile: 'column',
		desktopSemiMedium: 'row',
	},
}

export const addOnsHeader: SxProps<Theme> = {
	marginBottom: '20px',
	typography: {
		mobile: 'h3',
		desktop: 'h2',
	},
}

export const addOnsText: SxProps<Theme> = {
	maxWidth: '800px',
	minWidth: {
		mobile: 'none',
		desktopSemiMedium: '350px',
	},
	typography: {
		mobile: 'body1',
		desktop: 'h6',
	},
}
export const addOnsCards: SxProps<Theme> = {
	width: {
		mobile: '100%',
		desktopSemiMedium: 'fit-content',
	},
	display: 'flex',
	flexDirection: 'column',
	gap: {
		mobile: '130px',
		mobileSemiMedium: '170px',
		tablet: '50px',
		desktopSemiMedium: '30px',
	},
	paddingLeft: {
		tablet: '35px',
		desktopSemiMedium: 0,
	}
}
