import { Color } from '@mui/material';

import '@mui/material/styles';

declare module '@mui/material/styles' {

	interface PaletteColor extends Color {}

	interface Palette {
		white: Palette['primary'];
		blue: Palette['primary'];
	}

	interface PaletteOptions {
		white?: PaletteOptions['primary'];
		blue?: PaletteOptions['primary'];
	}
}