import type { Metadata } from "next";
import { Geist_Mono, Inter, Plus_Jakarta_Sans } from "next/font/google";

import { AppThemeProvider } from "@/components/admin/admin-theme";
import { DemoBanner } from "@/components/saas/demo-banner";
import { cn } from "@/lib/utils";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "K2 Orbit | SaaS Landing + App Template",
  description:
    "A clean futurist SaaS boilerplate with landing, pricing, dashboard, auth, and admin pages for K2 Digital Media.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("h-full antialiased", inter.variable, jakarta.variable, geistMono.variable)}>
      <body className="k2-demo-shell min-h-full font-sans text-foreground">
        <AppThemeProvider>
          <DemoBanner />
          {children}
        </AppThemeProvider>
      </body>
    </html>
  );
}
