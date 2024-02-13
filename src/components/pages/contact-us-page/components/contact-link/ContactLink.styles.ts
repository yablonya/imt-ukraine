import {SxProps, Theme} from "@mui/system";
import theme from "@/styles/theme/theme";

export const link: SxProps<Theme> = {
	border: '1px solid',
	borderColor: theme.palette.blue[200],
	borderRadius: '15px',
	color: theme.palette.blue[100],
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	gap: {
		mobile: '10px',
		mobileSemiMedium: '18px',
	},
	flexDirection: {
		mobile: 'row',
		desktop: 'column',
	},
	width: {
		mobile: '100%',
		desktop: '260px',
		desktopSemiLarge: '300px',
	},
	height: {
		mobile: '64px',
		desktop: '160px',
	},
	padding: {
		mobile: '10px 25px',
		desktop: '16px 18px',
	},

	'&:hover': {
		color: 'white.main',
		backgroundColor: theme.palette.blue[200],
		'& .MuiTypography-root:first-of-type': {
			display: 'none',
			opacity: 0,
		},
		'& .MuiTypography-root:nth-of-type(2)': {
			desktop: {
				display: 'block',
				opacity: 1,
			}
		}
	},

	transition: 'all 0.2s ease-in-out',
}

export const linkIcon: SxProps<Theme> = {
	width: {
		mobile: '28px',
		mobileSemiMedium: '34px',
		desktop: '40px',
	},

	height: {
		mobile: '28px',
		mobileSemiMedium: '34px',
		desktop: '40px',
	},
}

export const linkText: SxProps<Theme> = {
	typography: {
		mobile: 'body1',
		mobileSemiMedium: 'h6',
	},

}

export const linkHoverText: SxProps<Theme> = {
	textAlign: 'center',
	display: 'none',
	opacity: 0,
}