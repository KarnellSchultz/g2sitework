import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="w-full flex justify-center py-6 sm:py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12">
            <Image
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl  object-cover sm:w-full lg:order-2 lg:aspect-square"
              height="550"
              src="/images/sitework2.jpeg"
              width="550"
              sizes="(max-width: 600px) 100vw, 600px"
            />
            <div className="flex flex-col justify-center space-y-4 lg:order-1">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  About G2 Sitework
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  {`At G2 Sitework, we're seasoned industry professionals specializing in underground
          utilities, with decades of experience serving the Tampa Bay area. Our expertise in the
          field empowers us to consistently deliver high-quality services, ensuring exceptional
          customer experiences with every project we undertake.`}
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4 lg:order-3">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Partner with Us
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  {`For new projects or reliable maintenance, G2 Sitework simplifies underground utility work. 
          Join us in strengthening Tampa Bay.`}
                </p>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Contact G2 Sitework today for practical underground utility services.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="/contact"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 
      <div className="h-screen w-full flex flex-col items-center px-4 gap-4 py-6 sm:py-12 md:py-24 lg:py-32 xl:py-48">
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
      </div> */}
    </main>
  );
}
