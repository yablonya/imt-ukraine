import {SxProps, Theme} from "@mui/system";

export const tabStyles: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  padding: '6px 10px',
  borderRadius: '6px',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.13)',
  },
  transition: 'all 0.2s ease-in-out',
};

export const iconContainer: SxProps<Theme> = {
  height: '22px',
  width: '22px',
};
