import {SxProps, Theme} from "@mui/system";
import theme from "@/styles/theme/theme";

export const lowerFooter: SxProps<Theme> = {
  borderTop: '1px solid white',
  backgroundColor: theme.palette.blue[600],
  padding: {
    mobile: '13px 25px 15px',
    desktop: '16px 25px 18px',
  },
  display: 'flex',
	alignItems: {
		mobile: 'flex-start',
		mobileSemiMedium: 'center'
	},
  gap: {
    mobile: '13px',
    desktop: '80px'
  },
  flexDirection: {
    mobile: 'column',
    desktop: 'row'
  },
  justifyContent: 'center',
}

export const copyright: SxProps<Theme> = {
  fontSize: {
    mobile: '12px',
    desktop: '14px',
  },
}

export const pptc: SxProps<Theme> = {
  fontSize: {
    mobile: '12px',
    desktop: '14px',
  },
	flexDirection: {
		mobile: 'column',
		mobileSemiMedium: 'row'
	},
  display: 'flex',
  gap: {
	  mobile: '13px',
	  mobileSemiMedium: '40px'
  },
	textAlign: 'center'
}