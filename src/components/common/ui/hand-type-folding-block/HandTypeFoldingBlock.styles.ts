import {SxProps, Theme} from "@mui/system";
import theme from "@/styles/theme/theme";

export const closingBlock: SxProps<Theme> = {
	width: '230px',
	height: '75px',
	border: '2px solid #3D8361',
	borderRadius: '15px',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
};

export const foldingBlock = (
	isOpen: boolean,
	isDropped: boolean,
	leftDistance: number,
	isStretched: boolean
): SxProps<Theme> => ({
	transition: theme.transitions.create(['width', 'height', 'transform', 'margin', 'padding'], {
		duration: theme.transitions.duration.standard,
	}),
	position: isOpen ? 'absolute' : 'relative',
	transform: isDropped ? `translateX(-${leftDistance - 50}px)` : 'none',
	mt: isOpen ? '65px' : '-75px',
	// left: isOpen ? `0` : 'none',
	width: isDropped ? '100%' : '230px',
	height: isStretched ? 'auto' : '75px',
	color: 'white',
	minHeight: '75px',
	backgroundColor: '#3D8361',
	borderRadius: '15px',
	padding: isStretched ? '16px 25px' : '14px 15px',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',
	justifyContent: 'center',
});

export const foldingBlockTitle = (isOpen: boolean): SxProps<Theme> => ({
	transition: theme.transitions.create(['textAlign'], {
		duration: theme.transitions.duration.complex,
	}),
	textAlign: isOpen ? 'left' : 'center',
	width: '100%',
});

export const foldingBlockMaintext = (isOpen: boolean, isStretched: boolean): SxProps<Theme> => ({
	transition: theme.transitions.create(['opacity'], {
		duration: theme.transitions.duration.standard,
	}),
	display: isStretched ? 'block' : 'none',
	opacity: isStretched ? '1' : '0',
	mt: '15px',
	typography: 'body 1'
});