import Link from "next/link";
import Footer from "./footer/Footer";
import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

const NavigationMenu = ({
  setIsMenuOpen,
  isMenuOpen,
}: {
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
  isMenuOpen: boolean;
}) => {
  return (
    <>
      <nav className="bg-[#011627] xl:hidden absolute top-[3.6rem] left-0 right-0 h-[85.8vh] rounded-b-lg z-50 flex flex-col overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -200 }}
          transition={{ duration: 0.4, ease: "linear" }}
        >
          <li className="text-white pl-4 py-4 border-y border-[#1E2D3D]">
            <Link
              onClick={() => setIsMenuOpen(false)}
              href="/"
              className="block"
            >
              _Hello
            </Link>
          </li>
          <li className="text-white pl-4 py-4 border-b border-[#1E2D3D]">
            <Link
              href="/about"
              onClick={() => setIsMenuOpen(false)}
              className="block"
            >
              _about-me
            </Link>
          </li>
          <li className="text-white pl-4 py-4 border-b border-[#1E2D3D]">
            <Link
              href="/projects"
              onClick={() => setIsMenuOpen(false)}
              className="block"
            >
              _projects
            </Link>
          </li>
          <li className="text-white pl-4 py-4 border-b border-[#1E2D3D]">
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block"
            >
              _contact-me
            </Link>
          </li>
        </motion.div>
        <AnimatePresence>
          {isMenuOpen && <Footer isMenuOpen={isMenuOpen} />}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default NavigationMenu;
