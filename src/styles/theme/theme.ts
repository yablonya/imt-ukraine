'use client';

import { ukUA as MaterialLocale } from '@mui/material/locale';
import { createTheme } from '@mui/material/styles';

import customBreakpoints from '@/styles/theme/breakpoints/breakpoints';
import customPalette from '@/styles/theme/palette/palette';
import customTypography from '@/styles/theme/typography/typography';

const theme = createTheme(
  {
    breakpoints: customBreakpoints,
	  palette: customPalette,
    typography: customTypography,
  },
  MaterialLocale,
);

export default theme;