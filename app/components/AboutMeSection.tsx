"use-client";
import { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

interface ITabClick {
  handleTabClick: (tab: "personal" | "professional") => void;
  setActiveSection: Dispatch<SetStateAction<boolean>>;
  activeTab: "personal" | "professional";
}

const AboutMeSection = ({
  handleTabClick,
  setActiveSection,
  activeTab,
}: ITabClick) => {
  const [info, setInfo] = useState<boolean>(true);
  const [contacts, setContacts] = useState<boolean>(false);

  const handleActiveSection = (val: "personal" | "professional") => {
    if (val === "professional") {
      setActiveSection((prevInfo) => !prevInfo);
    }
  };

  const toggleSection = (section: "info" | "contacts") => {
    if (section === "info") {
      setInfo((prev) => !prev);
    } else if (section === "contacts") {
      setContacts((prev) => !prev);
    } else {
      return "Invalid section type";
    }
  };

  const tabs: {
    label: string;
    icon: string;
    value: "personal" | "professional";
  }[] = [
    {
      label: "Personal",
      icon: "/assets/shared/orange-folder.png",
      value: "personal",
    },
    {
      label: "Professional",
      icon: "/assets/shared/green-folder.png",
      value: "professional",
    },
  ];

  return (
    <div className="xl:border-r xl:border-[#1e2d3d]">
      <h1 className="text-white font-semibold text-base p-5">_about-me</h1>

      <nav>
        <ul className="xl:w-[350px]">
          <li
            onClick={() => toggleSection("info")}
            className="text-white font-semibold flex flex-col bg-[#1E2D3D] pl-5 py-1"
          >
            <div className="flex items-center cursor-pointer">
              <motion.img
                src="/assets/shared/triangle.png"
                width={12}
                height={12}
                alt="toggle arrow"
                className="mr-4"
                initial={{ rotate: 360 }}
                animate={{ rotate: info ? 360 : 270 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
              info
            </div>
          </li>
          <AnimatePresence>
            {info && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <ul className="py-2 flex flex-col gap-1">
                  {tabs.map(({ label, icon, value }) => (
                    <li
                      key={value}
                      className="flex items-center ml-6 space-x-3 mb-2"
                      onClick={() => (
                        handleActiveSection(value), handleTabClick(value)
                      )}
                    >
                      <motion.img
                        src="/assets/shared/arrow.png"
                        width={10}
                        height={10}
                        alt="arrow"
                        className="mr-4"
                        initial={{ rotate: 360 }}
                        animate={{
                          rotate: activeTab === value ? 450 : 360,
                        }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />
                      <Image width={12} height={12} src={icon} alt="folder" />
                      <span className="text-white font-semibold hover:text-[#607b96] cursor-pointer">
                        {label}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
          <li
            onClick={() => toggleSection("contacts")}
            className="text-white font-semibold flex flex-col bg-[#1E2D3D] pl-5 py-1 mt-1"
          >
            <div className="flex items-center cursor-pointer">
              <motion.img
                src="/assets/shared/triangle.png"
                width={12}
                height={12}
                alt="arrow"
                className="mr-4"
                initial={{ rotate: 360 }}
                animate={{ rotate: contacts ? 360 : 270 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
              Contacts
            </div>
          </li>
          <AnimatePresence>
            {contacts && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <ul className="py-2 ml-5 flex flex-col gap-1">
                  <Link
                    href={"mailto:nikolozgelenidze9@gmail.com"}
                    target="_blank"
                  >
                    <li className="flex items-center">
                      <Image
                        src="/assets/contact-icons/mail-icon.png"
                        width={10}
                        height={10}
                        alt="mail"
                        className="xl:hidden"
                      />
                      <p className="text-[#607b96] font-semibold ml-6 mb-1 break-words">
                        nikolozgelenidze9@gmail.com
                      </p>
                    </li>
                  </Link>

                  <Link href={"tel:+995511106081"} target="_blank">
                    <li className="flex items-center">
                      <Image
                        src="/assets/contact-icons/phone-icon.png"
                        width={10}
                        height={10}
                        alt="phone"
                        className="mr-5"
                      />
                      <p className="text-[#607b96] font-semibold break-words">
                        +(995) 511 10 60 81
                      </p>
                    </li>
                  </Link>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>{" "}
        </ul>
      </nav>
    </div>
  );
};

export default AboutMeSection;
