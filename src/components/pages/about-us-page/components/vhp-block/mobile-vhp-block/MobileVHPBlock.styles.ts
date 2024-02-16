import {SxProps, Theme} from "@mui/system";
import theme from "@/styles/theme/theme";

export const vhpImageBlock: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
	flexDirection: 'column',
  padding: '20px 25px 0',
	gap: '40px'
};

export const vhpHeader: SxProps<Theme> = {
  width: '100%',
  textAlign: {
    mobile: 'left',
    tablet: 'center',
  },
	typography: {
		mobile: 'h3',
		tablet: 'h2',
	}
};

export const vhpText: SxProps<Theme> = {
  typography: 'body1',
  padding: '20px 25px 50px',
};

export const listItemIcon: SxProps<Theme> = {
  color: 'black',
  height: '16px',
  minWidth: '40px',
};