import {SxProps, Theme} from "@mui/system";

export const vhpBlock: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '80px 0',
  position: 'relative',
  '&::before': {
    content: '""',
    background: 'black',
    position: 'absolute',
    zIndex: '0',
    top: '0',
    left: '0',
    opacity: '0.85',
    height: '100%',
    width: '100%',
  }
};

export const vhpContent: SxProps<Theme> = {
  position: 'absolute',
  color: 'white',
  width: '100%',
};

export const vhpContentHeader: SxProps<Theme> = {
  textAlign: 'center',
  mb: '30px',
};

export const textBorders: SxProps<Theme> = {
  padding: '10px 5px 10px 0',
  borderTop: '1px solid white',
  borderBottom: '1px solid white',
  width: '55%',
  margin: '0 auto',
};

export const vhpContentText: SxProps<Theme> = {
  typography: 'body1',
  height: 'auto',
  padding: '0 12px',
  maxHeight: '400px',
  textAlign: 'justify',
  overflow: 'auto',
  '&::-webkit-scrollbar-thumb': {
    background: 'white',
    borderRadius: '3px',
  },
  '&::-webkit-scrollbar': {
    background: 'transparent',
    width: '4px'
  }
};

export const listItemIcon: SxProps<Theme> = {
  color: 'white',
  height: '16px',
  minWidth: '40px',
};