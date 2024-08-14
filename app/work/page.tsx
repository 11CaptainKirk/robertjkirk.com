import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Work() {
  return (
    <div className="font-sans  items-center justify-items-center  ">
      <main className="flex flex-col gap-8 row-start-2 items-center  relative bg-slate-900 w-full ">
        <div className="h-screen w-full rounded-md bg-neutral-50 dark:bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
          <div className="max-w-2xl mx-auto p-4 flex flex-col gap-4 justify-center items-center">
            <h1 className="py-1 font-display font-semibold px-0.5 z-10 text-5xl text-transparent duration-700  bg-gradient-to-b from-neutral-500 to-neutral-900 dark:from-neutral-200 dark:to-neutral-600  cursor-default text-edge-outline animate-title  sm:text-7xl md:text-9xl whitespace-nowrap bg-clip-text ">
              work
            </h1>

            <div className="w-[40rem] h-40 relative">
              {/* Underline Gradient */}
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
            </div>
          </div>
          <BackgroundBeams className="dark:invert-0 invert hue-rotate-180 dark:hue-rotate-0 transform-gpu" />
        </div>
      </main>
    </div>
  );
}
