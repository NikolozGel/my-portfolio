"use client";
import Image from "next/image";
import { useState } from "react";
import NavigationMenu from "./NavigationMenu";
import { AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#011627] relative p-4 xl:p-0 flex items-center justify-between border-y border-x border-[#1e2d3d] rounded-t-lg">
      <h1 className="text-[#607b96] text-lg font-semibold xl:p-4 xl:-mr-[500px]">
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
      <Navbar />

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
