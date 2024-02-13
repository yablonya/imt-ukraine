import {SxProps, Theme} from "@mui/system";
import theme from "@/styles/theme/theme";

export const accordionBlock: SxProps<Theme> = {
	borderRadius: '15px !important',
	overflow: 'hidden',
	backgroundColor: theme.palette.blue[900],
};

export const accordionHeader: SxProps<Theme> = {
	backgroundColor: theme.palette.blue[200],
	color: 'white.main',
	minHeight: '64px',
	borderRadius: '15px',
	overflow: 'hidden',

}
export const accordionHeaderText: SxProps<Theme> = {
	paddingRight: '15px',
	typography: {
		mobile: 'body1',
		desktop: 'h6',
	}
}

export const accordionMainText: SxProps<Theme> = {
	paddingTop: '5px',
	whiteSpace: 'pre-line',
}