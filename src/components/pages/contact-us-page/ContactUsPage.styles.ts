import {SxProps, Theme} from "@mui/system";
import theme from "@/styles/theme/theme";

export const handsArtBlock: SxProps<Theme> = {
	display: 'flex',
	alignItems: 'center',
	height: {
		mobile: 'auto',
		desktop: '40vw',
	},
	maxHeight: '800px',
	overflow: 'hidden',
	position: 'relative',
	'&::before': {
		content: '""',
		background: 'black',
		position: 'absolute',
		zIndex: '0',
		top: '0',
		left: '0',
		opacity: '0.4',
		height: '100%',
		width: '100%',
	}
}

export const handsArtText: SxProps<Theme> = {
	textAlign: {
		mobile: 'center',
		desktop: 'left'
	},
	padding: {
		mobile: '18px 25px',
		mobileSemiMedium: '24px 25px',
		desktop: '45px 110px',
		desktopSemiLarge: '60px 150px'
	},
	typography: {
		mobile: 'h5',
		mobileMedium: 'h4',
		desktop: 'h1'
	},
	position: 'absolute',
	bottom: 0,
	width: '100%',
	color: 'white.main',
}

export const linksBlock: SxProps<Theme> = {
	display: 'flex',
	justifyContent: 'center',
	flexDirection: {
		mobile: 'column',
		desktop: 'row',
	},
	gap: {
		mobile: '26px',
		desktop: '40px',
	},
	padding: {
		mobile: '40px 25px',
		desktopSemiMedium: '45px 50px',
	},
}

export const formBlock: SxProps<Theme> = {
	display: 'flex',
	alignItems: 'center',
	flexDirection: 'column',
	gap: {
		mobile: '20px',
		desktop: '30px',
	},
	padding: {
		mobile: '0 25px 50px',
		desktopSemiMedium: ' 0 50px 60px',
	},
}

export const formBlockHeader: SxProps<Theme> = {
	typography: {
		mobile: 'h5',
		desktop: 'h4'
	},
}

export const formWithSticker: SxProps<Theme> = {
	width: '100%',
	display: 'flex',
	alignItems: 'center',
	gap: '80px',
	justifyContent: 'center',
}

export const form: SxProps<Theme> = {
	width: {
		mobile: '100%',
		desktop: '300px'
	},
	display: 'flex',
	alignItems: 'flex-end',
	flexDirection: 'column',
	gap: '26px',
}

export const sendButton: SxProps<Theme> = {
	padding: '8px 24px',
	borderRadius: '10px',
	width: {
		mobile: '100%',
		desktop: 'fit-content'
	}
}

export const toast = (isError: boolean): SxProps<Theme> => ({
	color: 'white',
	maxWidth: '500px',
	margin: '0 25px 20px 25px',
	'& .MuiSnackbarContent-root': {
		backgroundColor: isError ? '#d32f2f' : '#43a047',
	}
})