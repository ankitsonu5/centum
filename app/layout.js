import { League_Spartan, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ScrollToTop from "../components/ScrollToTop";

const leagueSpartan = League_Spartan({
  variable: "--font-spartan",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Centum | The Healthcare Revenue OS",
  description: "Real-time adjudication for modern healthcare revenue management.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${leagueSpartan.variable} ${jetBrainsMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
