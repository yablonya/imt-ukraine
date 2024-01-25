import {TypographyOptions} from "@mui/material/styles/createTypography";
import {Mulish} from "next/font/google";

export const mulish = Mulish({
  subsets: ['cyrillic', 'latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
})

const typography: TypographyOptions = {
  fontFamily: mulish.style.fontFamily,
  body1: {
    fontSize: 18,
    fontWeight: 400,
    lineHeight: 1.5,
  },
}

export default typography