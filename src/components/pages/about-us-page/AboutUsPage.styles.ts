import {SxProps, Theme} from "@mui/system";

export const technologyBlock: SxProps<Theme> = {
	display: 'flex',
	alignItems: 'center',
	flexDirection: {
		mobile: 'column',
		tablet: 'row',
	},
	backgroundColor: {
		mobile: 'rgba(214, 205, 164, 0.3)',
		tablet: 'transparent',
		desktop: 'rgba(214, 205, 164, 0.3)',
	},
	margin: {
		mobile: '0 25px 50px',
		desktopSemiMedium: '50px',
	},
}

export const technologyTextContent: SxProps<Theme> = {
	padding: {
		mobile: '25px',
		tablet: '10px 25px',
		desktopSemiMedium: '30px 90px 30px 70px'
	},
	marginRight: {
		tablet: '35px',
		desktop: '0',
	},
	transition: 'all 0.5s ease-in-out',
}

export const technologyHeader: SxProps<Theme> = {
	mb: '20px',
	typography: {
		mobile: 'h4',
		desktopSemiMedium: 'h3',
	},
}

export const technologyText: SxProps<Theme> = {
	whiteSpace: 'pre-line',
	typography: {
		mobile: 'body1',
		tablet: 'body2',
		desktopMedium: 'body1',
	}
}

export const featuresBlock: SxProps<Theme> = {
	margin: {
		mobile: '0 25px',
		desktopSemiMedium: '0 50px'
	},
}

export const featuresHeader: SxProps<Theme> = {
	mb: '20px',
	typography: {
		mobile: 'h4',
		desktopSemiMedium: 'h3',
	},
	textAlign: {
		mobile: 'left',
		desktopSemiMedium: 'center',
	}
}

export const imageFeatures: SxProps<Theme> = {
	display: 'flex',
	justifyContent: 'center',
	padding: {
		mobile: '0 0 20px',
		desktopSemiMedium: '20px 0 40px',
	}
}

export const listHeader: SxProps<Theme> = {
	paddingLeft: {
		mobile: 0,
		mobileMedium: '30px',
	}
}

export const featuresList: SxProps<Theme> = {
	padding: '20px 0 0',
	columnCount: 'auto',
	columnWidth: '400px',
	width: '100%',
	columnGap: '20px',
}

export const listItem: SxProps<Theme> = {
	breakInside: 'avoid-column',
	padding: '0',
	alignItems: 'flex-start',
	maxWidth: '400px',
	m: '0 auto 20px',
	typography: 'body1',
}

export const listItemIcon: SxProps<Theme> = {
	height: '22px',
	color: 'black',
	minWidth: '34px',
	marginTop: '6px',
}