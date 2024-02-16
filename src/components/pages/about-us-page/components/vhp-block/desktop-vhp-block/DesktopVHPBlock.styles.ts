import {SxProps, Theme} from "@mui/system";
import theme from "@/styles/theme/theme";

export const vhpBlock: SxProps<Theme> = {
  display: {
		mobile: 'none',
	  desktopSemiMedium: 'flex',
  },
	gap: '80px',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '50px 50px 0',

};

export const vhpContent = (checked: boolean): SxProps<Theme> => ({
  width: '100%',
	opacity: checked ? 1 : 0,
	transition: 'all 0.3s ease-in-out'
});

export const vhpContentHeader: SxProps<Theme> = {
  textAlign: 'center',
  mb: '20px',
};

export const textBorders: SxProps<Theme> = {
  padding: '10px 5px 10px 0',
  borderTop: '1px solid black',
  borderBottom: '1px solid black',
  margin: '0 auto',
};

export const vhpContentText: SxProps<Theme> = {
	whiteSpace: 'pre-line',
  typography: 'body1',
  height: 'auto',
  padding: '0 12px',
  maxHeight: '380px',
  textAlign: 'justify',
  overflow: 'auto',
  '&::-webkit-scrollbar-thumb': {
    background: '#757575',
    borderRadius: '3px',
	  opacity: '0.5'
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