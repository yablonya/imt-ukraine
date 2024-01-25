import Head from "next/head";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link
        href="https://fonts.googleapis.com/css2?family=Mulish:wght@200;300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </Head>
      <body>{children}</body>
    </html>
  );
}
