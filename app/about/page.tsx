"use client";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import data from "../../data.json";

const About = () => {
  const [info, setInfo] = useState<boolean>(true);
  const [contacts, setContacts] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<"personal" | "professional">(
    "personal"
  );
  const [activeSection, setActiveSection] = useState(false);

  const handleTabClick = (tab: "personal" | "professional") => {
    setActiveTab(tab);
  };

  const handleActiveSection = (val: "personal" | "professional") => {
    if (val === "professional") {
      setActiveSection(true);
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
    <div className="bg-[#011627] border-x border-b rounded-b-lg border-[#1e2d3d] h-[86vh] relative">
      <div className="xl:flex absolute top-0 left-0 w-full h-full">
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
                          <Image
                            width={12}
                            height={12}
                            src={icon}
                            alt="folder"
                          />
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
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>{" "}
            </ul>
          </nav>
        </div>
        <div className="flex flex-col">
          <div className="hidden xl:flex border-b border-[#1e2d3d]">
            <button
              className="w-[150px] py-4 border-r text-[#607b96] border-[#1e2d3d] flex justify-center items-center gap-2"
              onClick={() => (
                handleTabClick("personal"), activeTab === "personal"
              )}
            >
              Personal
              <Image
                src={"/assets/shared/delete.png"}
                width={0}
                height={0}
                className="w-[12px] h-[12px]"
                alt="deleteImage"
              />
            </button>
            {activeSection && (
              <button
                className="w-[150px] py-4 border-r text-[#607b96] border-[#1e2d3d] flex justify-center items-center gap-2"
                onClick={() => (
                  handleTabClick("professional"), activeTab === "professional"
                )}
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
              </button>
            )}
          </div>
          <div className="flex h-full">
            <div className="xl:w-[50%] xl:border-r xl:border-[#1e2d3d]">
              <div className="flex ml-5 pt-3">
                <p className="text-white font-semibold">{"//"} info / </p>
                <p className="text-[#607b96] font-semibold ml-2">
                  {activeTab === "personal" ? "Personal" : "Professional"}
                </p>
              </div>

              <AnimatePresence mode="wait">
                {activeTab && (
                  <motion.div
                    key={activeTab}
                    className="text-[#607b96] px-5 mt-7 font-medium"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    layout
                  >
                    {activeTab === "professional"
                      ? "/* As a Software developer, I am constantly striving to improve my skills and learn new technologies. I stepped into this big Tech world 2 years ago and I found myself very flexible and adaptive to learning new things. */"
                      : "/* Hi, I am Nikoloz Gelenidze, 25 years old from Tbilisi, Georgia. I can confidently say that I am a highly motivated and goal-oriented individual who consistently strives to achieve his objectives every single day. */"}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="hidden mt-12 xl:flex w-[50%] px-10 xl:flex-col">
              <p className="text-4xl text-[#4d5bce] font-bold xl:text-center mb-8">
                Skills
              </p>

              <div className="grid grid-cols-5 gap-20 mt-10">
                {data.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="relative flex items-center justify-center group"
                  >
                    <p className="text-[#43d9ad] absolute bottom-[66px] left-[50%] xl:left-[50%] transform -translate-x-1/2 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                      {skill.name}
                    </p>
                    <motion.div
                      animate={{
                        scale: [1, 1.4, 1],
                        transition: {
                          duration: 2.5,
                          repeat: Infinity,
                          repeatType: "loop",
                          ease: "easeInOut",
                        },
                      }}
                      whileHover={{
                        scale: [1, 1.5],
                        rotateY: [0, 360, 360],
                        transition: {
                          duration: 2,
                          ease: "easeInOut",
                        },
                      }}
                    >
                      <Image
                        src={skill.logo}
                        width={50}
                        height={50}
                        alt="skill icon"
                      />
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
