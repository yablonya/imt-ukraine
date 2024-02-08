import {ThemeProvider} from "@mui/system";
import theme from "@/styles/theme/theme";
import PageLayout from "@/components/common/layout/page-layout/PageLayout";
import {NextIntlClientProvider, useMessages} from "next-intl";

import '@/styles/global-styles.scss';

export default function RootLayout({
  children,
	params
}: Readonly<{
  children: React.ReactNode;
	params: { locale: string }
}>) {
	const messages = useMessages();

  return (
    <html lang={params.locale}>
    <body>
    <NextIntlClientProvider locale={params.locale} messages={messages}>
	    <ThemeProvider theme={theme}>
		    <PageLayout>
			    {children}
		    </PageLayout>
	    </ThemeProvider>
    </NextIntlClientProvider>
    </body>
    </html>
  );
}
