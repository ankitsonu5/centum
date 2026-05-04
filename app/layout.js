import "./globals.css";
import ScrollToTop from "../components/ScrollToTop";

export const metadata = {
  title: "Centum | The Healthcare Revenue OS",
  description:
    "Real-time adjudication for modern healthcare revenue management.",
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
