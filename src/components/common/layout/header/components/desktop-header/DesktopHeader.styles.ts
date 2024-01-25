import {SxProps, Theme} from "@mui/system";

export const headerContainer: SxProps<Theme> = {
  boxShadow: 'none',
  backgroundColor: 'transparent',
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

export const link: SxProps<Theme> = {
  color: 'inherit',
  textDecoration: 'none'
};

export const changeLang: SxProps<Theme> = {
  display: 'flex',
  gap: '7px',
  alignItems: 'center',
};

export const langIcon: SxProps<Theme> = {
  borderRadius: '4px',
  overflow: 'hidden',
  height: '20px',
};