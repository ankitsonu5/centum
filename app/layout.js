import "./globals.css";
import ScrollToTop from "../components/ScrollToTop";

export const metadata = {
  title: "RCM Services to Reduce Denials & Accelerate Collections",
  description: "Helping small clinics improve billing accuracy and reduce denials. Compliant RCM services that accelerate collections, enabled by AI",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
