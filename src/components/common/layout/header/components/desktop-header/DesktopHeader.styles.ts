import {SxProps, Theme} from "@mui/system";

export const headerContainer: SxProps<Theme> = {
	display: {
		mobile: 'none',
		desktopSemiMedium: 'flex'
	},
  boxShadow: 'none',
  backgroundColor: 'white',
  color: 'black',
  borderBottom: '1px solid black',
  padding: '14px 50px',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
};

export const logoLink: SxProps<Theme> = {
  width: 'fit-content',
  height: '52px',
};

export const menu: SxProps<Theme> = {
  gap: '35px',
};

export const link = (currentPage: string, pageLink: string): SxProps<Theme> => ({
  color: 'inherit',
  textDecoration: currentPage === pageLink ? 'underline #3D8361' : 'none',
  textUnderlineOffset: '6px',
});