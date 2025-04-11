"use-client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";

interface TabProps {
  handleTabClick: (tab: "personal" | "professional") => void;
  activeTab: "personal" | "professional";
  activeSection: boolean;
  setActiveSection: Dispatch<SetStateAction<boolean>>;
}

const ProfileTabs = ({
  handleTabClick,
  activeTab,
  activeSection,
  setActiveSection,
}: TabProps) => {
  const [isPersonalHover, setIsPersonalHover] = useState(false);
  const [isProffesionalHover, setIsProffesionalHover] = useState(false);

  return (
    <div className="hidden xl:flex border-b border-[#1e2d3d]">
      <motion.button
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.7 }}
        className="w-[150px] py-4 border-r text-[#607b96] relative border-[#1e2d3d] flex justify-center items-center gap-2"
        onClick={() => (handleTabClick("personal"), activeTab === "personal")}
        onMouseEnter={() => setIsPersonalHover(true)}
        onMouseLeave={() => setIsPersonalHover(false)}
      >
        Personal
        <Image
          src={"/assets/shared/delete.png"}
          width={12}
          height={12}
          className="w-[12px] h-[12px]"
          alt="deleteImage"
        />
        {isPersonalHover && (
          <motion.div
            className="border-b-[3.4px] border-b-[#1e2d3d] absolute bottom-0 left-0"
            initial={{ width: 0 }}
            animate={{ width: "9.3rem" }}
            transition={{ duration: 0.4 }}
          />
        )}
      </motion.button>

      <AnimatePresence>
        {activeSection && (
          <motion.button
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.7 }}
            className="w-[150px] py-4 border-r text-[#607b96] relative border-[#1e2d3d] flex justify-center items-center gap-2"
            onClick={() => handleTabClick("professional")}
            onMouseEnter={() => setIsProffesionalHover(true)}
            onMouseLeave={() => setIsProffesionalHover(false)}
          >
            Professional
            <Image
              src={"/assets/shared/delete.png"}
              width={0}
              height={0}
              className="w-[12px] h-[12px]"
              alt="deleteImage"
              onClick={() => setActiveSection(false)}
            />
            {isProffesionalHover && (
              <motion.div
                className="border-b-[3.4px] border-b-[#1e2d3d] absolute bottom-0 left-0"
                initial={{ width: 0 }}
                animate={{ width: "9.3rem" }}
                transition={{ duration: 0.4 }}
              />
            )}
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProfileTabs;
