import {TypographyOptions} from "@mui/material/styles/createTypography";
import {Mulish} from "next/font/google";

export const mulish = Mulish({
  subsets: ['cyrillic', 'latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
})

const typography: TypographyOptions = {
  fontFamily: mulish.style.fontFamily,
  body1: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 1.4,
  },

  body2: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 1.4,
  },

  h1: {
    fontSize: 40,
    fontWeight: 300,
    lineHeight: 1.28,
  },

  h2: {
    fontSize: 32,
    fontWeight: 300,
    lineHeight: 1.28,
  },

  h3: {
    fontSize: 28,
    fontWeight: 400,
    lineHeight: 1.28,
  },

	h4: {
		fontSize: 24,
		fontWeight: 400,
		lineHeight: 1.28,
	},

  h5: {
    fontSize: 20,
    fontWeight: 400,
    lineHeight: 1.28,
  },

  h6: {
    fontSize: 18,
    fontWeight: 400,
    lineHeight: 1.28,
  },
}

export default typography