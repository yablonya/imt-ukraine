import {SxProps, Theme} from "@mui/system";

export const headerIndent: SxProps<Theme> = {
  width: '100%',
  height: {
    mobile: '70px',
    desktopSemiMedium: '84px',
  },
};

export const pageContent: SxProps<Theme> = {
  minHeight: {
    mobile: '600px',
	  desktop: '768px',
    desktopSemiMedium: '900px',
  },
};