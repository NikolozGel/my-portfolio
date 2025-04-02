"use-client";
import Image from "next/image";
import Link from "next/link";
import GithubIcon from "../../public/assets/contact-icons/github.svg";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface IProjects {
  id: number;
  name: string;
  img: string;
  liveLink: string;
  techStackImage: string[];
}

const ProjectCard = ({
  id,
  name,
  techStackImage,
  img,
  liveLink,
}: IProjects) => {
  const [isHover, setIsHover] = useState(false);
  console.log(isHover);
  return (
    <>
      <div className="w-[370px]">
        <p className="text-lg text-[#4D5BCE] mb-3">Project {id}</p>
        <AnimatePresence>
          <motion.div
            onHoverStart={() => setIsHover(true)}
            onHoverEnd={() => setIsHover(false)}
            className="relative"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.6 }}
          >
            <div className="border-[0.2rem] border-[#1e2d3d] rounded-xl overflow-hidden">
              <Image
                src={img}
                width={410}
                height={400}
                alt={img}
                className="object-cover h-[250px]"
              />
              <div className="bg-[#011221] p-12">
                <p className="text-[#607B96]">{name}</p>
                <div className="flex justify-between mt-3">
                  <button className="bg-[#1C2B3A] text-white text-lg rounded-md py-2.5 px-3.5 hover:text-[#4D5BCE] ">
                    view-project
                  </button>
                  <motion.div
                    whileHover={{ scale: 1.3 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Link href={liveLink} target="_blank">
                      <Image
                        src={GithubIcon}
                        width={50}
                        height={50}
                        alt={GithubIcon}
                      />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
            <div
              className={`${
                isHover ? "block" : "hidden"
              } absolute left-1/2 top-[30%] -translate-x-1/2 w-full -translate-y-1/2 flex items-center justify-between px-5`}
            >
              {techStackImage.map((imgSrc, index) => (
                <motion.img
                  animate={{ scale: isHover ? 1.5 : 1 }}
                  initial={{ scale: 1 }}
                  exit={{ scale: 1 }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                    repeat: isHover ? Infinity : 0,
                    repeatType: "reverse",
                  }}
                  key={index}
                  src={imgSrc}
                  alt={`tech-logo-${index}`}
                  width={40}
                  height={40}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default ProjectCard;
