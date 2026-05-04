import "./globals.css";
import ScrollToTop from "../components/ScrollToTop";

export const metadata = {
  title: "Centum RCM",
  description: "Healthcare Revenue Cycle Management",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
