import {SxProps, Theme} from "@mui/system";

export const changeLangSelect: SxProps<Theme> = {
	width: {
		mobile: '51px',
		desktopSemiMedium: '96px',
	},
	maxHeight: '51px',
	'&:hover': {
		backgroundColor: '#ededed',
	},
	'&.Mui-focused': {
		backgroundColor: '#e0e0e0',
	},

	'& .MuiSelect-outlined': {
		display: 'flex',
		gap: '10px',
		alignItems: 'center',
		padding: {
			mobile: '7px 14px !important',
			desktopSemiMedium: '14px 18px !important',
		},
	},

	'& .MuiOutlinedInput-notchedOutline': {
		border: 'none',
	},
	'&:hover .MuiOutlinedInput-notchedOutline': {
		border: 'none',
	},
	'&.Mui-focused .MuiOutlinedInput-notchedOutline': {
		border: 'none',
	},

	'& .MuiSelect-iconOutlined': {
		display: 'none'
	}
};

export const changeLangOption: SxProps<Theme> = {
	display: 'flex',
	gap: '10px',
	alignItems: 'center',
	padding: {
		mobile: '7px 14px',
		desktopSemiMedium: '14px 16px',
	},
};

export const langIcon: SxProps<Theme> = {
	display: {
		mobile: 'none',
		desktopSemiMedium: 'block',
	},
	borderRadius: '3px',
	overflow: 'hidden',
	height: '18px',
	width: '27px'
};