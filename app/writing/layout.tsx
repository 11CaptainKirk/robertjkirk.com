import { BackgroundBeams } from "@/components/ui/background-beams";

export default function WritingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="font-sans  items-center justify-items-center ">
      <main className="flex flex-col gap-8 row-start-2 items-center  relative dark:bg-neutral-950 z-0  ">
        <div className=" rounded-md bg-zinc-200 dark:bg-zinc-900 flex flex-col items-center justify-center antialiased  min-h-screen w-screen ">
          <section className="w-11/12 sm:w-8/12 md:w-6/12   relative z-10 mt-20 ">
            {children}
          </section>
          <BackgroundBeams className="dark:invert-0 invert hue-rotate-180 dark:hue-rotate-0 transform-gpu max-h-screen" />
        </div>
      </main>
    </div>
  );
}
