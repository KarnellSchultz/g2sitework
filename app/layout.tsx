import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import Link from "next/link";
import { HardHatIcon } from "@/components/home-page";

export const metadata: Metadata = {
  title: "G2 Sitework",
  description: "G2 Sitework is a Tampa Bay-based sitework & underground utility company",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="  selection:bg-yellow-300 selection:text-black">
        <header className="px-4 lg:px-6 h-14 flex items-center">
          <Link className="flex items-center justify-center gap-2" href="/">
            <HardHatIcon className="h-6 w-6" />
            <span className="text-md font-semibold">G2 sitework</span>
            <span className="sr-only">G2 sitework</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="/about">
              About
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="/contact"
            >
              Contact
            </Link>
          </nav>
        </header>
        {children}
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © G2 Sitework. All rights reserved.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Privacy
            </Link>
          </nav>
        </footer>
      </body>
    </html>
  );
}
