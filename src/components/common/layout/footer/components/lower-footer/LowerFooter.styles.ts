import {SxProps, Theme} from "@mui/system";

export const lowerFooter: SxProps<Theme> = {
  color: 'white',
  borderTop: '1px solid white',
  backgroundColor: '#1C6758',
  padding: {
    mobile: '13px 25px 15px',
    desktop: '16px 25px 18px',
  },
  display: 'flex',
  alignItems: 'center',
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
  display: 'flex',
  gap: '40px',
  alignItems: 'center',
}