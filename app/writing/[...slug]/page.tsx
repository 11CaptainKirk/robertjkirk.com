import fs from "node:fs";
import path from "node:path";
import { useMDXComponents } from "@/mdx";
import { compileMDX, MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkMdxEnhanced from "remark-mdx-math-enhanced";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import BackButton from "@/components/elements/backButton";
import { CardSize, HoverGrid, Item } from "@/components/ui/card-hover-grid";

export const dynamicParams = false; // 404 for posts that don't exist
// export const dynamic = "force-static"; // force ssg

const contentDir = "app/writing/content";

export async function generateStaticParams() {
  // Recursively fetech all files in the content directory
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

  // Return an array of arrays of slug sections. For example, if the file is in the directory `app/writing/content/2021/01/01`, the slug will be `["2021", "01", "01"]`
  // This is necessary for the dynamic route with [...slug] to work.
  const slugs = files.map((file) => ({
    slug: file.toString().replace(".mdx", "").replaceAll(" ", "-").split("/"),
  }));

  return slugs;
}

// export async function generateStaticParams() {
//   // const posts = await fetch("https://.../posts").then((res) => res.json());
//   const posts = [{ slug: "post-1" }, { slug: "post-2" }];
//   return posts.map((post) => ({
//     slug: post.slug,
//   }));
// }

interface Params {
  params: {
    slug: string[];
  };
}

async function getFeaturedPosts(featuredPosts: string[]) {
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

export default async function Post({ params }: Params) {
  // Read the MDX file from the content source direectory
  const source = fs.readFileSync(
    path.join(
      process.cwd(),
      contentDir,
      params.slug.join("/").replaceAll("-", " ")
    ) + ".mdx",
    "utf8"
  );

  // MDX accepts a list of React components
  const components = useMDXComponents({});

  // We compile the MDX content with the frontmatter, components, and plugins
  const { content, frontmatter } = await compileMDX({
    source,
    options: {
      mdxOptions: {
        rehypePlugins: [rehypeHighlight, rehypeSlug, rehypeKatex],
        remarkPlugins: [remarkGfm, remarkMath],
      },
      parseFrontmatter: true,
    },
    components,
  });

  // (Optional) Set some easy variables to assign types, because TypeScript
  const pageTitle = frontmatter.title as string;
  const pageDescription = frontmatter.description as string;
  const pageDate = frontmatter.date as string;
  const pageAuthor = frontmatter.author as string;
  const tags = frontmatter.tags as string[];
  const featured = frontmatter.featured as string[];

  const featuredPosts = await getFeaturedPosts(
    frontmatter.featured as string[]
  );

  // Render the page
  return (
    <>
      <div className="flex flex-col p-8">
        <div className="flex items-center pb-8">
          <BackButton href="/writing" />
        </div>
        <p className="text-sm opacity-70 font-body">{pageDate}</p>
        <h1 className="font-display text-5xl font-semibold ">{pageTitle}</h1>

        {tags && (
          <div className="flex flex-wrap gap-4  mt-auto pt-4 ">
            {tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        )}
      </div>
      <div className="rounded-3xl p-12   dark:bg-black/50 bg-white/50 backdrop-blur-sm border  dark:border-white/[0.1] border-black/[0.1] group-hover:border-slate-700 relative z-20 flex-1">
        <div className="flex flex-col w-full  min-w-full ">
          <div className="prose">{content}</div>
        </div>
      </div>
      {/* {featured && (
        <div className="flex flex-wrap gap-4  mt-auto pt-4 ">
          {featured.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      )} */}
      <div className="max-w-screen-xl flex flex-col  py-16">
        <h1 className="font-display text-3xl font-semibold p-8 ">
          Featured Writing
        </h1>
        <HoverGrid items={featuredPosts} />
      </div>
    </>
  );
}
