import type { Metadata } from "next";
import {
  ColorSchemeScript,
  createTheme,
  DEFAULT_THEME,
  MantineProvider,
  mergeMantineTheme,
} from "@mantine/core";
import localFont from "next/font/local";
import "./globals.css";
import "@mantine/notifications/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/core/styles.layer.css";
import "mantine-datatable/styles.layer.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Next App Mantine Tailwind Template",
  description: "Next App Mantine Tailwind Template",
};

const theme = mergeMantineTheme(
  DEFAULT_THEME,
  createTheme({
    fontFamily: geistSans.style.fontFamily,
    fontFamilyMonospace: geistMono.style.fontFamily,
    autoContrast: true,
    luminanceThreshold: 0.36,
    focusRing: "never",
    defaultRadius: "md",
    cursorType: "pointer",
    primaryColor: "grape",
    defaultGradient: {
      from: "indigo",
      to: "cyan",
      deg: 45,
    },
  }),
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body className="antialiased bg-zinc-900">
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
