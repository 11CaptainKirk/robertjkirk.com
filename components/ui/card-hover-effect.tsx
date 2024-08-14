"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ReactNode, useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    metaTitle: string;
    title?: string;
    icon?: React.ReactNode;
    image?: ReactNode;
    description?: string;
    link: string;
    newTab?: boolean;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn("flex flex-wrap w-full h-full justify-center", className)}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          target={item.newTab ? "_blank" : undefined}
          className="relative group  sm:min-h-full p-4 flex flex-col min-w-full sm:min-w-0   sm:w-1/2 lg:w-1/3 "
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full bg-neutral-200 dark:bg-zinc-100/[0.05] backdrop-blur-lg block  rounded-3xl"
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
          {item.metaTitle && (
            <h6 className="text-center pb-3 text-sm md:text-base font-medium relative z-50 ">
              {item.metaTitle}
            </h6>
          )}
          <Card>
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
          </Card>
          {item.image && (
            <div className="animate-fade-in-slow   bg-red-800">
              <div className="w-full top-32  blur-3xl opacity-15 scale-100 md:scale-125 absolute aspect-video flex my-4 bg-red-300 ">
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
        "rounded-3xl p-4  dark:bg-black bg-zinc-800 backdrop-blur-3xl border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20 flex-1",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
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
        "text-zinc-100 font-bold text-lg tracking-wide ",
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
      className={cn(
        "mt-6 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
