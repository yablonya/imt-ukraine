import '@/styles/global-styles.scss';
import theme from "@/styles/theme/theme";
import {ThemeProvider} from "@mui/system";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
    <body>
    <ThemeProvider theme={theme}>
	    {children}
    </ThemeProvider>
    </body>
    </html>
  );
}
