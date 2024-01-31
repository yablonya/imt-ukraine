import {SxProps, Theme} from "@mui/system";

export const vhpImageBlock: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px 10px',
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

export const vhpHeader: SxProps<Theme> = {
  position: 'absolute',
  color: 'white',
  width: '100%',
  padding: '0 25px',
  textAlign: {
    mobile: 'left',
    tablet: 'center',
  }
};

export const vhpText: SxProps<Theme> = {
  typography: 'body1',
  padding: '30px 25px 50px',
};

export const listItemIcon: SxProps<Theme> = {
  color: 'black',
  height: '16px',
  minWidth: '40px',
};