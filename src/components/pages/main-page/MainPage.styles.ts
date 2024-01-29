import {SxProps, Theme} from "@mui/system";

export const firstBlock: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  margin: {
    mobile: 0,
    desktopSemiMedium: '50px',
  },
  backgroundColor: {
    mobile: 'transparent',
    desktopSemiMedium: '#3D8361',
  },
  flexDirection: {
    mobile: 'column',
    desktopSemiMedium: 'row',
  },
}

export const textContainer: SxProps<Theme> = {
  width: '100%',
  padding: {
    mobile: '30px 25px 0',
    desktopSemiMedium: '25px 80px 25px 60px',
  },
  color: {
    mobile: 'black',
    desktopSemiMedium: 'white',
  },
}
export const textBlockHeader: SxProps<Theme> = {
  mb: '25px',
  typography: {
    desktopSemiMedium: 'h4',
    desktopMedium: 'h3',
  },
}

export const textBlockContent: SxProps<Theme> = {
  typography: {
    desktopSemiMedium: 'body2',
    desktopMedium: 'body1',
  },
}

export const mediaBlock: SxProps<Theme> = {
  padding: {
    mobile: '50px 25px',
    desktopSemiMedium: '0 50px 60px',
  },
}

export const mediaBlockHeader: SxProps<Theme> = {
  mb: '40px',
  textAlign: {
    mobile: 'left',
    desktopSemiMedium: 'center',
  },
  typography: {
    mobile: 'h3',
    desktopSemiMedium: 'h2',
  },
}
export const media: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
}

export const imageContainer: SxProps<Theme> = {
  width: {
    mobile: '42vw',
    desktopSemiMedium: '233px',
  },
  maxWidth: {
    mobile: '190px',
    desktopSemiMedium: 'none',
  },
  height: {
    mobile: '42vw',
    desktopSemiMedium: '233px',
  },
  maxHeight: {
    mobile: '190px',
    desktopSemiMedium: 'none',
  },
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
}
