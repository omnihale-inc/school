"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type IconType = "home" | "about" | "documents";

const NAVIGATION_LINKS = ["Home", "About", "Documents"];

const Navigation: React.FC = () => {
  const icons = {
    home: {
      active: "/icons/home-active.png",
      inactive: "/icons/home.png",
    },
    about: {
      active: "/icons/about-active.png",
      inactive: "/icons/about.png",
    },
    documents: {
      active: "/icons/documents-active.png",
      inactive: "/icons/documents.png",
    },
  };

  const isActive = (href: string) => usePathname() === href;

  const setStyleForActiveLink = (link: string) => {
    const href = setHref(link);
    return `${
      isActive(href) ? "font-semibold" : ""
    } flex items-center justify-center lg:pb-3 text-base `;
  };

  const setHref = (link: string) =>
    link === "Home" ? "/" : `/${link.toLowerCase()}`;

  return (
    <header className="fixed top-0 w-full z-30 bg-white pb-7 border-b border-gray-200">
      <section className="flex flex-col items-center lg:flex-row lg:justify-between lg:items-center mt-8 mx-auto max-w-6xl w-5/6">
        <div className="relative w-10 h-10">
          <Image src="/logo.png" alt="logo" fill />
        </div>
        <nav className="flex justify-between mt-7 lg:mt-3 gap-5">
          {NAVIGATION_LINKS.map((link, index) => (
            <Link
              href={setHref(link)}
              key={index}
              className={setStyleForActiveLink(link)}
            >
              <div className="relative h-4 w-4 mr-1">
                <Image
                  src={
                    isActive(setHref(link))
                      ? icons[link.toLocaleLowerCase() as IconType].active
                      : icons[link.toLocaleLowerCase() as IconType].inactive
                  }
                  alt="nav-icon"
                  fill
                  objectFit="contain"
                />
              </div>
              {link}
            </Link>
          ))}
        </nav>
      </section>
    </header>
  );
};

export default Navigation;
