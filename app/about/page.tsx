import { HomePage } from "@/components/home-page";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="h-screen w-full flex flex-col justify-center items-center px-4 gap-4 py-6 sm:py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            About G2 Sitework
          </h1>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            {`At G2 Sitework, we're seasoned industry professionals specializing in underground
          utilities, with decades of experience serving the Tampa Bay area. Our expertise in the
          field empowers us to consistently deliver high-quality services, ensuring exceptional
          customer experiences with every project we undertake.`}
          </p>
        </div>

        <div className="space-y-2">
          <h4 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            Partner with Us
          </h4>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            {`For new projects or reliable maintenance, G2 Sitework simplifies underground utility work. 
          Join us in strengthening Tampa Bay.`}
          </p>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Contact G2 Sitework today for practical underground utility services.
          </p>
        </div>
      </div>
    </main>
  );
}
