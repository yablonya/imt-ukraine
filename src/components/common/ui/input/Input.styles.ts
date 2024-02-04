import {SxProps, Theme} from "@mui/system";

export const formControl: SxProps<Theme> = {
	borderRadius: '15px',
	width: '100%',
}

export const inputlabel: SxProps<Theme> = {
	backgroundColor: 'white',
	padding: '0 7px 0 6px',
	ml: '-4px',
}

export const input: SxProps<Theme> = {
	padding: '0',
	borderRadius: '15px',
	'& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input:focus': {
		boxShadow: '0 0 0 0.2rem rgba(61, 131, 97, 0.25)',
		borderRadius: '15px',
	},

	'& .css-1sqnrkk-MuiInputBase-input-MuiOutlinedInput-input': {
		padding: '16.5px 14px',
	},

	'& .css-1sqnrkk-MuiInputBase-input-MuiOutlinedInput-input:focus': {
		boxShadow: '0 0 0 0.2rem rgba(61, 131, 97, 0.25)',
		borderRadius: '15px',
	},
}