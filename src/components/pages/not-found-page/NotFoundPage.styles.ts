import {SxProps, Theme} from "@mui/system";

export const page: SxProps<Theme> = {
	width: '100%',
	height: '100vh',
	backgroundColor: '#1976D2',
	color: 'white.main',
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
	backgroundColor: 'white.main',
	height: '2px',
	margin: '10px 0 20px'
}

export const toMainLink: SxProps<Theme> = {
	paddingTop: '30px',
	color: 'white.main',
}
