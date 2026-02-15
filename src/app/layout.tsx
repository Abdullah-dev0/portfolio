import { Toaster } from "sonner";

import ChatBubble from "@/components/common/ChatBubble";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import OnekoCat from "@/components/common/OnekoCat";
import { ThemeProvider } from "@/components/common/ThemeProviders";
import { generateMetadata as getMetadata } from "@/config/Meta";

import "./globals.css";

export const metadata = getMetadata("/");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`font-hanken-grotesk border-muted mx-auto max-w-[800px] border-x antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster />

          <Navbar />
          {children}
          <OnekoCat />
          <Footer />
          <ChatBubble />
        </ThemeProvider>
      </body>
    </html>
  );
}
