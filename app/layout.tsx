import "@/app/ui/global.css";
import { Lusitana } from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${Lusitana.className} antialiased`}>{children}</body>
    </html>
  );
}
