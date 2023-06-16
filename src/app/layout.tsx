"use client";

import "@/styles/globals.css";
import { ReactNode } from 'react';
import { Poppins } from "next/font/google";
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { ClientProvider } from "@/utils/trpc-provider";
import { siteConfig } from "@/config/site";
import Header from "@/components/Header/Header";

// Note: Never import/require the *.min.js files from the npm package.
const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

interface RootLayoutProps {
  children: ReactNode;
  session: undefined | null | Session;
}

export default function RootLayout(props: RootLayoutProps) {
  const { children, session } = props;
  return (

    <html lang="en">
      <body cz-shortcut-listen="true" className={`mx-auto max-w-[1920px] ${poppins.className}`}>
        <ClientProvider>
        <SessionProvider session={session}>
          <Header />
          {children}
          </SessionProvider> 
        </ClientProvider>
      </body>
    </html>


  );
}
