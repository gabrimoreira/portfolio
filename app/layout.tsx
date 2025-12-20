import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import { AOSInit } from "./components/AOSInit"; 
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gabriel | Portfólio",
  description: "Desenvolvedor de Software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth" suppressHydrationWarning> 

      <body className={inter.className}>
        <AOSInit />
        <ThemeProvider
          attribute="class"  
          defaultTheme="dark"  
          enableSystem={false}         
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}