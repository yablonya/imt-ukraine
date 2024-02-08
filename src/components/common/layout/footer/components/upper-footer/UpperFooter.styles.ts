import {SxProps, Theme} from "@mui/system";

export const upperFooter: SxProps<Theme> = {
  color: 'white',
  backgroundColor: '#1C6758',
  padding: {
    mobile: '23px 25px 25px',
    desktop: '43px 25px 45px',
  },
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: {
    mobile: 'column',
    desktop: 'row',
  },
  gap: {
    mobile: '25px',
    desktop: '200px',
  },
}

export const footerLists: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'space-between',
	alignItems: {
		mobile: 'center',
		mobileSemiMedium: 'flex-start',
	},
  gap: {
    mobile: '50px',
	  tablet: '150px',
    desktop: '200px',
  },
}

export const footerListHeader: SxProps<Theme> = {
  fontSize: {
    mobile: '15px',
    desktop: '18px',
  },
  fontWeight: '600',
  pb: '14px',
}

export const footerList: SxProps<Theme> = {
  fontSize: {
    mobile: '12px',
    desktop: '14px',
  },
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: '12px',
  maxWidth: {
    mobile: '170px',
    desktop: '280px',
  },
}

export const listLink: SxProps<Theme> = {
	color: 'white',
	display: 'flex',
	alignItems: 'center',
	gap: '8px',
	textDecoration: 'none',
	'&:hover': {
		textDecoration: 'underline'
	},
	fontSize: {
		mobile: '12px',
		desktop: '14px',
	},
	typography: 'body2'
}

export const socialNetIcon: SxProps<Theme> = {
  height: '16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
}

export const socialNetLinkText: SxProps<Theme> = {
	display: {
		mobile: 'none',
		mobileSemiMedium: 'inline'
	},
	fontSize: {
		mobile: '12px',
		desktop: '14px',
	},
}