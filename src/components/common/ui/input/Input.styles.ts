import {SxProps, Theme} from "@mui/system";

export const formControl: SxProps<Theme> = {
	borderRadius: '15px',
	width: '100%',
}

export const input: SxProps<Theme> = {
	borderRadius: '15px',
	'& .MuiOutlinedInput-input': {
		'&::-webkit-scrollbar-thumb': {
			borderRadius: '3px',
		},
		'&::-webkit-scrollbar': {
			background: 'transparent',
			width: '4px'
		}
	},
}