import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { HoverLink, HoverLinks } from "@/components/ui/card-hover-links";
import { ChevronDown, Menu } from "lucide-react";
import { headers } from "next/headers";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

const projects = [
  {
    title: "Writing",
    link: "/writing",
  },
  {
    title: "Work",
    link: "/work",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];

export default function HeaderBar() {
  const headersList = headers();
  const hostname = headersList.get("x-forwarded-host");
  // return <div className="flex justify-between items-center p-4 bg-gray-800 text-white"> hey </div>

  return (
    <header className="mx-0 ">
      <Link href="/">
        <Image
          src="/rk-logo.svg"
          alt="logo"
          width={70}
          height={30}
          className="dark:invert fixed top-6 left-8  z-10  opacity-70 hover:opacity-100 transition-all duration-500 scale-100 hover:scale-110"
        />
      </Link>

      <div className="fixed top-4 right-4 md:right-0 md:left-1/2 md:transform md:-translate-x-1/2  rounded-3xl py-1 max-w-md justify-between items-center z-10">
        <HoverBorderGradient
          duration={3}
          containerClassName="rounded-full mx-auto"
          as="div"
          className="backdrop-blur-lg flex bg-white/90 dark:bg-white/5 text-black dark:text-white "
        >
          <input type="checkbox" id="menu-toggle" className="peer hidden" />
          <label
            htmlFor="menu-toggle"
            className="cursor-pointer text-lg md:hidden flex flex-row gap-4 items-center px-4"
          >
            {hostname?.search("/") === -1 ? "Home" : 2}
            <ChevronDown />
          </label>
          <nav className="hidden md:flex md:space-x-6 max-h-64 mx-auto ">
            <HoverLinks items={projects}></HoverLinks>
          </nav>
          <div className="absolute top-full left-0 right-0 bg-white/30 rounded-lg shadow-md p-0 hidden peer-checked:flex md:hidden flex-col ">
            <Link href="/" className="text-md">
              Home
            </Link>
            <Link href="/about" className="text-md">
              About
            </Link>
            <Link href="/contact" className="text-md">
              Contact
            </Link>
            <ThemeToggle />
          </div>
        </HoverBorderGradient>
      </div>
      <div className="fixed top-6 right-8 hidden md:flex  z-50">
        <ThemeToggle />
      </div>
    </header>
  );
}
