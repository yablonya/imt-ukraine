import {SxProps, Theme} from "@mui/system";

export const headerContainer: SxProps<Theme> = {
  boxShadow: 'none',
  backgroundColor: 'transparent',
  color: 'black',
  borderBottom: '1px solid black',
  padding: '12px 20px',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
};

export const logoLink: SxProps<Theme> = {
  width: 'fit-content',
  height: '45px',
};

export const rightBlock: SxProps<Theme> = {
  display: 'flex',
  gap: '18px',
  alignItems: 'center',
};

