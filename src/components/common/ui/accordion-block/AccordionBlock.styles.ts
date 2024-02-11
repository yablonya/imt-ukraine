import {SxProps, Theme} from "@mui/system";

export const accordionBlock: SxProps<Theme> = {
	borderRadius: '15px !important',
	overflow: 'hidden',
	backgroundColor: 'rgba(61, 131, 97, 0.2)',
};

export const accordionHeader: SxProps<Theme> = {
	backgroundColor: '#3D8361',
	color: 'white',
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