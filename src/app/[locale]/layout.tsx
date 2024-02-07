import Head from "next/head";
import '@/styles/global-styles.scss';
import {ThemeProvider} from "@mui/system";
import theme from "@/styles/theme/theme";
import {Locale} from "next/dist/compiled/@vercel/og/satori";
import PageLayout from "@/components/common/layout/page-layout/PageLayout";

export default function RootLayout({
  children,
	params
}: Readonly<{
  children: React.ReactNode;
	params: { locale: Locale }
}>) {
  return (
    <html lang={params.locale}>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link
        href="https://fonts.googleapis.com/css2?family=Mulish:wght@200;300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </Head>
    <body>
    <ThemeProvider theme={theme}>
	    <PageLayout>
		    {children}
	    </PageLayout>
    </ThemeProvider>
    </body>
    </html>
  );
}
