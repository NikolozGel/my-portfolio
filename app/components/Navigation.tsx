import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const Navigation = () => {
  const handleTabClick = (
    tab: "_Hello" | "_About-me" | "_Projects" | "_Contact-me"
  ) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  const [activeTab, setActiveTab] = useState<
    "_Hello" | "_About-me" | "_Projects" | "_Contact-me"
  >("_Hello");

  return (
    <div className="hidden xl:flex xl:p-0">
      <nav>
        <ul className="flex border-r rounded-md border-[#1e2d3d]">
          <motion.li
            onClick={() => handleTabClick("_Hello")}
            whileTap={{ y: 2, scale: 0.95, opacity: 0.5 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
            className="border-l py-5 px-0 border-[#1e2d3d] relative"
          >
            <Link href="/" className="text-[#607b96] py-4 px-8">
              _Hello
            </Link>
            {activeTab === "_Hello" && (
              <div className="border-b-[3px] border-b-[#FEA55F] absolute w-full h-1 bottom-0 left-0"></div>
            )}
          </motion.li>

          <motion.li
            onClick={() => handleTabClick("_About-me")}
            whileTap={{ y: 2, scale: 0.95, opacity: 0.5 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
            className="border-l py-5 px-0 border-[#1e2d3d] relative"
          >
            <Link href="/about" className="text-[#607b96] py-4 px-8">
              _About-me
            </Link>
            {activeTab === "_About-me" && (
              <div className="border-b-[3px] border-b-[#FEA55F] absolute w-full h-1 bottom-0 left-0"></div>
            )}
          </motion.li>

          <motion.li
            onClick={() => handleTabClick("_Projects")}
            whileTap={{ y: 2, scale: 0.95, opacity: 0.5 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
            className="border-l py-5 px-0 border-[#1e2d3d] relative"
          >
            <Link href="/projects" className="text-[#607b96] py-4 px-8">
              _Projects
            </Link>
            {activeTab === "_Projects" && (
              <div className="border-b-[3px] border-b-[#FEA55F] absolute w-full h-1 bottom-0 left-0"></div>
            )}
          </motion.li>

          <motion.li
            onClick={() => handleTabClick("_Contact-me")}
            whileTap={{ y: 2, scale: 0.95, opacity: 0.5 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
            className="border-l py-5 px-0 border-[#1e2d3d] relative ml-auto"
          >
            <Link href="/contact" className="text-[#607b96] py-4 px-8">
              _Contact-me
            </Link>
            {activeTab === "_Contact-me" && (
              <div className="border-b-[3px] border-b-[#FEA55F] absolute w-full h-1 bottom-0 left-0"></div>
            )}
          </motion.li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
