"use client";

import { cn } from "@/lib/utils";
import { clsx } from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ReactNode, useState } from "react";
import { Badge } from "./badge";

export type CardSize = "small" | "medium" | "large";

const sizeMap = {
  small: "col-span-1 row-span-1",
  medium: "md:col-span-2 col-span-1 row-span-1",
  large: "md:col-span-2 col-span-1 row-span-2 ",
};

export interface Item {
  title?: string;
  icon?: React.ReactNode;
  image?: ReactNode;
  description?: string;
  date?: string;
  link?: string;
  newTab?: boolean;
  size?: CardSize;
  tags?: string[];
}

export const HoverGrid = ({
  items,
  className,
}: {
  items: Item[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 grid-flow-dense justify-center",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link ?? "/"}
          key={item?.link}
          target={item.newTab ? "_blank" : undefined}
          className={clsx(
            "relative group  sm:min-h-full  p-4 flex flex-col min-w-full sm:min-w-0   ",
            sizeMap[item.size || "small"]
          )}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full  bg-neutral-200 dark:bg-zinc-100/[0.05] backdrop-blur-lg block  rounded-3xl"
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

          <Card>
            {item.date && (
              <div className="flex text-sm text-neutral-500 ">
                {new Date(item.date).toLocaleDateString()}
              </div>
            )}
            {item.icon && (
              <div className="flex justify-center items-center  mb-4 ">
                {item.icon}
              </div>
            )}

            {item.title && <CardTitle>{item.title}</CardTitle>}
            {item.image && (
              <div className="w-full aspect-video flex my-4 ">{item.image}</div>
            )}

            {item.description && (
              <CardDescription>{item.description}</CardDescription>
            )}
            {item.tags && (
              <div className="flex flex-wrap gap-4 place-self-end mt-auto pt-4 ">
                {item.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            )}
          </Card>
          {item.image && (
            <div className="animate-fade-in-slow  ">
              <div className="w-full top-32  blur-3xl opacity-15 scale-100 md:scale-125 absolute aspect-video flex my-4  ">
                {item.image}
              </div>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-3xl p-4  dark:bg-black/50 bg-zinc-800 backdrop-blur-sm border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20 flex-1",
        className
      )}
    >
      <div className="relative z-50 h-full">
        <div className="p-4 h-full flex flex-col ">{children}</div>
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
    <h4
      className={cn(
        "text-zinc-100 font-semibold text-xl tracking-wide ",
        className
      )}
    >
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn("mt-6 text-zinc-400 leading-relaxed text-base", className)}
    >
      {children}
    </p>
  );
};
