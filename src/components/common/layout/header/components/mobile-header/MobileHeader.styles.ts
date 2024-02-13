import {SxProps, Theme} from "@mui/system";

export const headerContainer: SxProps<Theme> = {
	display: {
		mobile: 'flex',
		desktopSemiMedium: 'none'
	},
  boxShadow: 'none',
  backgroundColor: 'white.main',
  color: 'black',
  borderBottom: '1px solid black',
  padding: '12px 20px',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  zIndex: '1201',
  position: 'fixed',
};

export const logoLink: SxProps<Theme> = {
  width: 'fit-content',
  height: '45px',
};

export const rightBlock: SxProps<Theme> = {
  display: 'flex',
  gap: '14px',
  alignItems: 'center',
};

