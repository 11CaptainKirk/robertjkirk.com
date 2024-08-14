import { BackgroundBeams } from "@/components/ui/background-beams";
import { HoverGrid, CardSize, Item } from "@/components/ui/card-hover-grid";
import { HoverHome } from "@/components/ui/card-hover-home";

const items: Item[] = [
  {
    date: new Date().toISOString(),
    title: "How to write a blog post",
    description:
      "A guide on how to write a blog post that will rank on Google and drive traffic to your website.",
    link: "writing/post-1",
    size: "large",
    tags: ["writing", "blogging"],
  },
  {
    title: "How to write a book",
    description:
      "A guide on how to write a book that will be published and become a bestseller.",
    link: "https://robertkirk.org",
  },
  {
    title: "How to write a screenplay",
    description:
      "A guide on how to write a screenplay that will be produced and win an Oscar.",
    link: "https://robertkirk.org",
    size: "small",
  },
  {
    title: "How to write a blog post",
    description:
      "A guide on how to write a blog post that will rank on Google and drive traffic to your website.",
    link: "https://robertkirk.org",
  },
  {
    title: "How to write a book",
    description:
      "A guide on how to write a book that will be published and become a bestseller.",
    link: "https://robertkirk.org",
    size: "medium",
    tags: ["writing", "publishing"],
  },
  {
    title: "How to write a screenplay",
    description:
      "A guide on how to write a screenplay that will be produced and win an Oscar.",
    link: "https://robertkirk.org",
    tags: ["writing", "screenwriting"],
  },
  {
    title: "How to write a blog post",
    description:
      "A guide on how to write a blog post that will rank on Google and drive traffic to your website.",
    link: "https://robertkirk.org",
  },
  {
    title: "How to write a book",
    description:
      "A guide on how to write a book that will be published and become a bestseller.",
    link: "https://robertkirk.org",
    size: "large",
  },
  {
    title: "How to write a screenplay",
    description:
      "A guide on how to write a screenplay that will be produced and win an Oscar.",
    link: "https://robertkirk.org",
  },
  {
    title: "How to write a blog post",
    description:
      "A guide on how to write a blog post that will rank on Google and drive traffic to your website.",
    link: "https://robertkirk.org",
    size: "large",
  },
  {
    title: "How to write a book",
    description:
      "A guide on how to write a book that will be published and become a bestseller.",
    link: "https://robertkirk.org",
  },
  {
    title: "How to write a screenplay",
    description:
      "A guide on how to write a screenplay that will be produced and win an Oscar.",
    link: "https://robertkirk.org",
  },
];

export default function Writing() {
  return (
    <div className="font-sans  items-center justify-items-center ">
      <main className="flex flex-col gap-8 row-start-2 items-center  relative bg-slate-900 w-full z-0  ">
        <div className=" w-full rounded-md bg-neutral-50 dark:bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
          <div className="max-w-2xl mx-auto p-4 flex flex-col gap-4 justify-center items-center pt-32">
            <h1 className="py-1 font-display font-semibold px-0.5 z-10 text-5xl text-transparent duration-700  bg-gradient-to-b from-neutral-500 to-neutral-900 dark:from-neutral-200 dark:to-neutral-600  cursor-default text-edge-outline animate-title  sm:text-7xl md:text-9xl whitespace-nowrap bg-clip-text ">
              writing
            </h1>
          </div>
          <div className="max-w-screen-xl mx-auto p-4 flex flex-col gap-4 justify-center items-center py-32">
            <HoverGrid items={items} />
          </div>
          <BackgroundBeams className="dark:invert-0 invert hue-rotate-180 dark:hue-rotate-0" />
        </div>
      </main>
    </div>
  );
}
