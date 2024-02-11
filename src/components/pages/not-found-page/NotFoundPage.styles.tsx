import {SxProps, Theme} from "@mui/system";

export const page: SxProps<Theme> = {
	width: '100%',
	height: '100vh',
	backgroundColor: '#3D8361',
	color: 'white',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
}
export const title: SxProps<Theme> = {
	fontSize: '60px',
	lineHeight: '70px',
}
export const divider: SxProps<Theme> = {
	width: '180px',
	backgroundColor: 'white',
	height: '2px',
	margin: '10px 0 20px'
}

export const toMainLink: SxProps<Theme> = {
	paddingTop: '30px',
	color: 'white',
}
