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
	'& .MuiOutlinedInput-input': {
		padding: '16.5px 14px',
	},
	'& .MuiOutlinedInput-input:focus': {
		boxShadow: '0 0 0 0.2rem rgba(61, 131, 97, 0.25)',
		borderRadius: '15px',
	},
}