import {SxProps, Theme} from "@mui/system";
import theme from "@/styles/theme/theme";

export const imageBlock = (checked: boolean): SxProps<Theme> => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	position: 'relative',
	color: 'black',
});

export const imageBlockText: SxProps<Theme> = {
	textAlign: 'center',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'flex-start',
	padding: '40px 25px 0'
}

export const imageBlockTitle = (checked: boolean): SxProps<Theme> => ({
	transition: theme.transitions.create(['opacity'], {
		duration: theme.transitions.duration.standard,
	}),
	m: {
		mobile: 0,
		desktopSemiMedium: '30px 0 13px',
	},
	typography: {
		mobile: 'h4',
		tablet: 'h2',
		desktopSemiMedium: 'h1',
	},
	opacity: {
		mobile: checked ? 1 : 0,
		desktopSemiMedium: 1,
	},
});

export const imageBlockSubtitle: SxProps<Theme> = {
	mb: '40px',

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