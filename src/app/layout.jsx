import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { Inter, Monoton } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JS Daily Tips",
  description:
    "Daily JavaScript tips for continuous learning and mastery. Elevate your coding skills with JSDailyTips. #JavaScript #CodingTips #ReactTricks",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
