import { BackgroundBeams } from "@/components/ui/background-beams";
import { HoverGrid, CardSize, Item } from "@/components/ui/card-hover-grid";
import { HoverHome } from "@/components/ui/card-hover-home";
import { compileMDX } from "next-mdx-remote/rsc";

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
import fs from "node:fs";
import path from "node:path";
const contentDir = "app/writing/content";

async function getPosts() {
  const targets = fs.readdirSync(path.join(process.cwd(), contentDir), {
    recursive: true,
  });

  // Declare an empty array to store the files
  const files = [];

  for (const target of targets) {
    // If the target is a directory, skip it, otherwise add it to the files array
    if (
      fs
        .lstatSync(path.join(process.cwd(), contentDir, target.toString()))
        .isDirectory()
    ) {
      continue;
    }

    // Built the files array
    files.push(target);
  }

  //  const source = fs.readFileSync(
  //    path.join(process.cwd(), contentDir, params.slug.join("/")) + ".mdx",
  //    "utf8"
  //  );
  let posts: Item[] = [];

  for (const file of files) {
    const source = fs.readFileSync(
      path.join(process.cwd(), contentDir, file.toString()),
      "utf8"
    );
    const { frontmatter } = await compileMDX({
      source,
      options: {
        parseFrontmatter: true,
      },
    });
    posts.push({
      title: frontmatter.title as string,
      description: frontmatter.description as string,
      date: frontmatter.date as string,
      // link: `/writing/${file
      //   .join()
      //   .replace(".mdx", "")
      //   .replace(" ", "-")
      //   .trimEnd()}`,
      link: `/writing/${file
        .toString()
        .replaceAll(" ", "-")
        .replace(".mdx", "")}`,
      size: frontmatter.size as CardSize,
    });
  }

  // const { frontmatter } = await compileMDX({
  //   source,
  //   options: {
  //     parseFrontmatter: true,
  //   },
  //   components,
  // });

  return posts;
}

export default async function Writing() {
  const posts = await getPosts();
  return (
    <>
      <div className="max-w-2xl mx-auto p-4 flex flex-col gap-4 justify-center items-center">
        <h1 className="py-1 font-display font-semibold px-0.5 z-10 text-5xl text-transparent duration-700  bg-gradient-to-b from-neutral-500 to-neutral-900 dark:from-neutral-200 dark:to-neutral-600  cursor-default text-edge-outline animate-title  sm:text-7xl md:text-9xl whitespace-nowrap bg-clip-text ">
          writing
        </h1>
      </div>
      <div className="max-w-screen-xl mx-auto p-4 flex flex-col gap-4 justify-center items-center py-16">
        <HoverGrid items={posts} />
      </div>
    </>
  );
}
