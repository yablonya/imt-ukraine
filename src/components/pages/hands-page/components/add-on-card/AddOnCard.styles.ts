import {SxProps, Theme} from "@mui/system";

export const addOnCard = (cardColor: string): SxProps<Theme> => ({
	height: {
		mobile: 'auto',
		tablet: '200px',
	},
	width: {
		mobile: '100%',
		desktopSemiMedium: '625px',
		desktopLarge: '850px',
	},
	display: 'flex',
	alignItems: 'center',
	gap: {
		mobile: '25px',
		tablet: '30px',
	},
	borderRadius: '15px',
	backgroundColor: cardColor,
	color: cardColor === '#1976D2' ? 'white.main' : 'black',
	flexDirection: {
		mobile: 'column',
		tablet: 'row'
	}
})

export const addOnCardTextBox: SxProps<Theme> = {
	padding: {
		mobile: '0 35px 25px',
		tablet: '15px 40px 15px 0',
	}
}

export const addOnCardText: SxProps<Theme> = {
	padding: '15px 0 0'
}