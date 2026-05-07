import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import Script from "next/script";

import { GsapSiteEffects } from "@/components/gsap-site-effects";
import { ExitModal } from "@/components/modals/exit-modal";
import { HeartsModal } from "@/components/modals/hearts-modal";
import { PracticeModal } from "@/components/modals/practice-modal";
import { Toaster } from "@/components/ui/sonner";
import { siteConfig } from "@/config";

import "./globals.css";

const font = Nunito({ subsets: ["latin"] });
const themeInitScript = `
(() => {
  try {
    const key = "lingo-theme";
    const mode = localStorage.getItem(key) || "system";
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldUseDark = mode === "dark" || (mode === "system" && prefersDark);
    document.documentElement.classList.toggle("dark", shouldUseDark);
    document.documentElement.classList.toggle("light", mode === "light");
    document.documentElement.dataset.theme = mode;
  } catch {
    document.documentElement.dataset.theme = "system";
  }
})();
`;

export const viewport: Viewport = {
  themeColor: "#22C55E",
};

export const metadata: Metadata = siteConfig;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${font.className} min-h-screen overflow-x-hidden bg-background text-foreground`}
      >
        <Script
          id="lingo-theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
        <ClerkProvider
          appearance={{
            layout: {
              logoImageUrl: "/favicon.ico",
            },
            variables: {
              colorPrimary: "#22C55E",
            },
            elements: {
              card: "glass-panel-strong text-foreground",
              cardBox: "glass-panel-strong shadow-2xl",
              footer: "glass-panel-strong",
              modalBackdrop: "bg-slate-950/70 backdrop-blur-xl",
              modalContent: "z-[10000]",
              userButtonPopoverCard:
                "z-[10000] glass-panel-strong text-foreground shadow-2xl",
              userButtonPopoverFooter: "glass-panel-strong",
              userButtonPopoverRootBox: "z-[10000]",
              userButtonBox: "h-10 w-10 sm:h-12 sm:w-12",
              userButtonTrigger: "h-10 w-10 sm:h-12 sm:w-12",
              userButtonAvatarBox: "h-10 w-10 sm:h-12 sm:w-12",
              userButtonAvatarImage: "h-full w-full object-cover",
            },
          }}
          afterSignOutUrl="/"
        >
          <GsapSiteEffects />
          <Toaster theme="system" richColors closeButton />
          <ExitModal />
          <HeartsModal />
          <PracticeModal />
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
