"use client";
import Image from "next/image";
import { useState } from "react";
import NavigationMenu from "./NavigationMenu";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { motion } from "framer-motion";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<
    "_Hello" | "_About-me" | "_Projects" | "_Contact-me"
  >("_Hello");

  const handleTabClick = (
    tab: "_Hello" | "_About-me" | "_Projects" | "_Contact-me"
  ) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  return (
    <header className="bg-[#011627]  relative p-4 xl:p-0 flex items-center justify-between border-y border-x border-[#1e2d3d] rounded-t-lg">
      <h1 className="text-[#607b96] font-semibold xl:p-4 xl:-mr-[500px]">
        Nikoloz-Gelenidze
      </h1>

      <Image
        src={`${
          isMenuOpen
            ? "/assets/shared/delete.png"
            : "/assets/shared/hamburger.png"
        }`}
        width={18}
        height={18}
        alt="image"
        onClick={() => setIsMenuOpen((prev) => !prev)}
        className="block xl:hidden cursor-pointer"
      />
      <div className="hidden xl:flex xl:p-0">
        <nav className="flex justify-end">
          <ul className="flex border-r rounded-md border-[#1e2d3d]">
            {[
              { title: "_Hello", href: "/" },
              { title: "_About-me", href: "/about" },
              { title: "_Projects", href: "/projects" },
              { title: "_Contact-me", href: "/contact", last: true },
            ].map((tab) => (
              <motion.li
                key={tab.title}
                onClick={() =>
                  handleTabClick(
                    tab.title as
                      | "_Hello"
                      | "_About-me"
                      | "_Projects"
                      | "_Contact-me"
                  )
                }
                whileTap={{ y: 2, scale: 0.95, opacity: 0.5 }}
                transition={{ type: "spring", stiffness: 100, damping: 10 }}
                className="border-l py-4 px-0 border-[#1e2d3d] relative"
              >
                <Link href={tab.href} className="text-[#607b96] py-4 px-8">
                  {tab.title}
                </Link>
                {activeTab === tab.title && (
                  <div className="border-b-[3px] border-b-[#FEA55F] absolute w-full h-1 bottom-0 left-0"></div>
                )}
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <NavigationMenu
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
