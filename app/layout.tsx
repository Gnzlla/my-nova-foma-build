import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  weight: ["400", "700"], // optional
  subsets: ["latin"], // 'japanese' is key
  display: "swap", // recommended for performance
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={notoSansJP.className}>{children}</body>
    </html>
  );
}
