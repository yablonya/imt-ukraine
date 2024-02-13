import {SxProps, Theme} from "@mui/system";
import theme from "@/styles/theme/theme";

export const headerContainer: SxProps<Theme> = {
	display: {
		mobile: 'none',
		desktopSemiMedium: 'flex'
	},
	boxShadow: 'none',
	backgroundColor: theme.palette.white.main,
	color: 'black',
	borderBottom: '1px solid black',
	padding: '14px 50px',
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'center',
	gap: '100px',
};

export const logoLink: SxProps<Theme> = {
  width: 'fit-content',
  height: '52px',
};

export const menu: SxProps<Theme> = {
	ml: '30px',
  gap: '35px',
};

export const link = (currentPage: string, pageLink: string): SxProps<Theme> => ({
  color: 'inherit',
  textDecoration: currentPage === pageLink ? 'underline #0077B6' : 'none',
  textUnderlineOffset: '6px',
});