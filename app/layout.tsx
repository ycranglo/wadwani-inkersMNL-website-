import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

export const metadata: Metadata = {
  title: "InkersMNL",
  description:
    "InkersMNL specializes in providing high-quality printing services with a primary focus on stickers tailored for a variety of purposes including packaging, decorations, and more. With a commitment to excellence, InkersMNL offers a wide range of options to meet the diverse needs of businesses and individuals alike. Whether it's custom labels for product packaging, vibrant decals for creative decorations, or specialized stickers for promotional campaigns, InkersMNL delivers top-notch printing solutions with attention to detail and precision. With a dedication to customer satisfaction and a reputation for reliability, InkersMNL stands as a trusted partner for all printing needs, ensuring each project receives the utmost care and attention to bring visions to life with vibrant colors, crisp designs, and durable materials.",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/images/logo.jpg",
  },
  generator: "typescript, react, nextjs, tailwindcss",
  creator: "Yocor,Saturno,Garcia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
