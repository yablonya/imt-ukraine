import {SxProps, Theme} from "@mui/system";
import theme from "@/styles/theme/theme";

export const closingBlock: SxProps<Theme> = {
	cursor: 'pointer',
	width: '245px',
	height: '75px',
	border: '2px solid #1976D2',
	borderRadius: '15px',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
};

export const accordeonBlock = (
	isOpen: boolean,
	isDropped: boolean,
	leftDistance: number,
	): SxProps<Theme> => ({
	'&::before': {
		display: 'none'
	},
	transition: theme.transitions.create(['all'], {
		duration: theme.transitions.duration.standard,
	}),
	position: isOpen ? 'absolute' : 'static',
	left: isDropped ? '0px' : `${leftDistance - 50}px`,
	width: isDropped ? '100%' : '245px',
	mt: isOpen ? '65px' : '-75px',
	backgroundColor: theme.palette.blue[200],
	borderRadius: '15px !important',
	overflow: 'hidden',
	color: 'white.main',
});


export const accordeonTitle = (isOpen: boolean, isDropped: boolean): SxProps<Theme> => ({
	cursor: isOpen ? 'default !important' : 'pointer',
	height: '75px',
	borderRadius: '15px',
	'& .MuiAccordionSummary-content': {
		justifyContent: 'center',
	},
	'&::before, &::after': {
		transition: theme.transitions.create(['opacity'], {
			duration: theme.transitions.duration.standard,
		}),
		opacity: isDropped ? 1 : 0,
		content: '""',
		height: '1px',
		flexGrow: 10,
		backgroundColor: 'white.main',
	},
});

export const accordeonTitleText: SxProps<Theme> = {
	textAlign: 'center',
};

export const accordeonMainText: SxProps<Theme> = {
	typography: 'body1',
	whiteSpace: 'pre-line',
	padding: '0px 25px 20px',
};