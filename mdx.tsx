import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: ({ children, href }) => (
      <a href={href} className="styledLink">
        {children}
      </a>
    ),
    h1: ({ children }) => (
      <h1 className="font-display text-3xl leading-loose">{children}</h1>
    ),
    hr: () => (
      <hr className="my-8 border-t border-2 border-gray-300 dark:border-white/10 " />
    ),
    h2: ({ children }) => <h2 className="font-display text-2xl">{children}</h2>,
    h3: ({ children }) => <h3 className="font-display text-xl">{children}</h3>,
    h4: ({ children }) => <h4 className="font-display text-lg">{children}</h4>,
    h5: ({ children }) => (
      <h5 className="font-display text-base">{children}</h5>
    ),
    h6: ({ children }) => <h6 className="font-display text-sm">{children}</h6>,
    p: ({ children }) => <p className="font-body">{children}</p>,
    ul: ({ children }) => <ul className="list-disc">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal">{children}</ol>,
    li: ({ children }) => <li>{children}</li>,
    ...components,
  };
}
