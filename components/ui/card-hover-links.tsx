"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { LinkPreview } from "./link-preview";

export const HoverLink = ({
  url,
  className,
  children,
}: {
  url: string;
  className?: string;
  children: React.ReactNode;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("flex flex-row px-10 ", className)}>
      <Link
        href={url}
        key={url}
        className="relative group block w-full "
        onMouseEnter={() => setHoveredIndex(1)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <AnimatePresence>
          {hoveredIndex === 1 && (
            <motion.span
              className="absolute inset-0 w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
              layoutId="hoverBackground"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.15 },
              }}
              exit={{
                opacity: 0,
                transition: { duration: 0.15, delay: 0.2 },
              }}
            />
          )}
        </AnimatePresence>

        <LinkPreview url={url} className="text-md  py-1 relative z-20 px-4  ">
          {children}
        </LinkPreview>
        {/* <LinkUI
            <CardTitle>{item.title}</CardTitle>
          
          </LinkUI> */}
      </Link>
    </div>
  );
};

export const HoverLinks = ({
  items,
  className,
}: {
  items: {
    title: string;
    link: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("flex flex-row px-10 ", className)}>
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group block w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 w-full bg-neutral-800/10  dark:bg-zinc-100/[0.1] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>

          {/* <LinkPreview
            url={item.link}
            className="text-md  py-1 relative z-20 px-4 "
          >
            {item.title}
          </LinkPreview> */}
          <div className="text-md font-display  py-1 relative z-20 px-4 hover:scale-110 duration-700 transition-all">
            {item.title}
          </div>
          {/* <LinkUI
            <CardTitle>{item.title}</CardTitle>
          
          </LinkUI> */}
        </Link>
      ))}
    </div>
  );
};

export const LinkUI = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl  w-full p-1 overflow-hidden border border-transparent   relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="py-1">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide ", className)}>
      {children}
    </h4>
  );
};
