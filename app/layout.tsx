import "./globals.css";
import { Manrope } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata = {
  title: "WordFlows - Improve Your Typing Skills",
  description: "Practice and improve your typing skills with WordFlows",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={manrope.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}