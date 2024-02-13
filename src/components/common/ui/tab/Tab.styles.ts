import {SxProps, Theme} from "@mui/system";
import theme from "@/styles/theme/theme";

export const tabStyles = (currentTab: string, tab: string): SxProps<Theme> => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  padding: '6px 10px',
  borderRadius: '6px',
  backgroundColor: currentTab === tab ? theme.palette.blue[800] : 'transparent',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.13)',
  },
  transition: 'all 0.2s ease-in-out',
	textDecoration: 'none',
	color: 'black'
});

export const iconContainer: SxProps<Theme> = {
  height: '22px',
  width: '22px',
};
