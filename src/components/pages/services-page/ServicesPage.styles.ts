import {SxProps, Theme} from "@mui/system";

export const servicesBlock: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  margin: {
    mobile: 0,
    desktopSemiMedium: '50px 50px 60px',
  },
  backgroundColor: {
    mobile: 'transparent',
    desktopSemiMedium: 'rgba(214, 205, 164, 0.3)',
  },
  flexDirection: {
    mobile: 'column',
    desktopSemiMedium: 'row',
  },
}

export const textContainer: SxProps<Theme> = {
  width: '100%',
  padding: {
    mobile: '30px 25px 50px',
    desktopSemiMedium: '25px 80px 25px 60px',
  },
}
export const textPartHeader: SxProps<Theme> = {
  mb: '25px',
  typography: {
    desktopSemiMedium: 'h4',
    desktopMedium: 'h3',
  },
}

export const textPartContent: SxProps<Theme> = {
  typography: {
    desktopSemiMedium: 'body2',
    desktopMedium: 'body1',
  },
}