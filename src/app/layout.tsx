import type { Metadata } from "next";
import { Poppins, Rubik } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { siteConfig } from "./page";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import { headers } from 'next/headers';
import UAParser from 'ua-parser-js';

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
});
const rubik = Rubik({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-rubik",
});

const mouseSupportedOS: string[] = ["Windows", "macOS", "Linux", "Chrome OS", "Xbox", "PlayStation", "Ubuntu", "Unix", "Arch"];

export const metadata: Metadata = {
  metadataBase: new URL("https://sabuj.vercel.app"),
  title: {
    default: siteConfig.name,
    template: `%s - Software Engineer`,
  },
  description: siteConfig.description,

  // added new keywords for seo
  keywords: [
    "Sabuj",
    "Ghosh",
    "Sabuj Ghosh",
    "sabuj ghosh",
    "Sabujghosh",
    "SABUJ",
    "GHOSH",
    "sabujghosh",
    "Sabuj ghosh",
    "portfolio",
    "web developer",
    "web",
    "web dev",
    "developer",
    "PROGRAMMER ",
    "programmer ",
    "website",
    "@SabujGh55659975",
    "Night3y3",
    "night3y3",
    "Nighteye",
    "nighteye",
    "NIGHTEYE",
    "NIGHT3Y3",
  ],
  authors: [
    {
      name: "Sabuj Ghosh",
      url: "https://github.com/Night3y3",
    },
  ],
  creator: "Sabuj Ghosh",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/dragon.json`],
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/dragon.json`],
    creator: "@SabujGh55659975",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = headers();
  const userAgent = headersList.get('user-agent') || '';
  const parser = new UAParser(userAgent);
  const deviceInfo = parser.getResult();

  const isDesktop = mouseSupportedOS.includes(deviceInfo.os.name ?? "");

  return (
    <html lang="en">
      <body className={`${poppins.variable} ${rubik.variable} min-h-screen`}>
        {isDesktop ? (
          <FollowerPointerCard title={`${deviceInfo.os.name}'s user`}>
            <MainContent>
              <Navbar />
              {children}
            </MainContent>
          </FollowerPointerCard>
        ) : (
          <MainContent>
            <Navbar />
            {children}
          </MainContent>
        )}
      </body>
    </html>
  );
}

const MainContent: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <main
    className={cn(
      "flex relative screen break-words min-h-screen items-center justify-between pt-14 pb-4 px-40 max-md:p-4 bg-transparent max-sm:pt-20 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]",
      { "bg-white": "#E6E7EB" }
    )}
  >
    {children}
  </main>
);