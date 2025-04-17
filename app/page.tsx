"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import SnippetImage from "../public/assets/shared/code-snippet-no-opacity.svg";

export default function Home() {
  return (
    <>
      <section className="relative main xl:bg-[url(/assets/shared/bg-main-desktop.png)] bg-left bg-cover flex flex-col gap-5 bg-[#011627] border-[#1e2d3d] p-4 rounded-b-lg border-b h-[86vh] overflow-hidden xl:pt-28 xl:pl-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-white mt-16 xl:text-xl text-lg mb-2">
            Hi All. I am
          </p>
          <h1 className="text-[#E5E9F0] text-6xl font-medium break-words mb-1">
            Nikoloz
            <br className="xl:hidden" /> Gelenidze
          </h1>
          <p className="text-md xl:text-3xl text-[#4d5bce] font-bold">
            {"> "}Software Developer
          </p>
        </motion.div>

        <div className="absolute bottom-[12%] xl:bottom-[32%]">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
          >
            <div className="flex">
              <p className="text-[#607B96] mb-4 xl:text-xl break-words">
                {" "}
                {"// "}find my profile on Github:{" "}
              </p>
            </div>
            <span className="text-[#4D5BCE] xl:text-lg font-bold">const </span>
            <span className="text-[#43D9AD] xl:text-lg">githubLink </span>
            <span className="text-white xl:text-lg"> = </span>
            <span className="break-words text-[#e99287] xl:text-xl underline">
              <Link href="https://github.com/nikolozgel" target="_blank">
                https://
                <br className="xl:hidden" />
                github.com/nikolozgel
              </Link>
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="hidden xl:flex flex-col gap-[10px] absolute right-[10%] top-[3%]"
        >
          {[
            Array.from({ length: 3 }, (_, index) => (
              <Image
                key={index}
                src={SnippetImage}
                width={580}
                height={200}
                alt="code-snippet-image"
                className="opacity-50"
              />
            )),
          ]}
        </motion.div>
      </section>
    </>
  );
}
