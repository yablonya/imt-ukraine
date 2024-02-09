import {SxProps, Theme} from "@mui/system";

export const servicesBlock: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  margin: {
    mobile: 0,
    desktop: '50px 50px 60px',
  },
  backgroundColor: {
    mobile: 'transparent',
    desktop: 'rgba(214, 205, 164, 0.3)',
  },
  flexDirection: {
    mobile: 'column',
    desktop: 'row',
  },
}

export const textContainer: SxProps<Theme> = {
  width: '100%',
  padding: {
    mobile: '30px 25px 50px',
    desktop: '25px 80px 25px 60px',
  },
}
export const textPartHeader: SxProps<Theme> = {
  mb: '20px',
  typography: {
    desktop: 'h4',
    desktopMedium: 'h3',
  },
}

export const textPartContent: SxProps<Theme> = {
	whiteSpace: 'pre-line',
  typography: {
    desktop: 'body2',
    desktopMedium: 'body1',
  },
}