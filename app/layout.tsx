import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { HardHatIcon } from "@/components/home-page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "G2 Sitework",
  description: "G2 Sitework is a full-service site development company.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="px-4 lg:px-6 h-14 flex items-center">
          <Link className="flex items-center justify-center" href="/">
            <HardHatIcon className="h-6 w-6" />
            <span className="sr-only">G2 Sitework</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              Services
            </Link>
            {/* <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Projects
          </Link> */}
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
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
