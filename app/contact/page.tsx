"use client";
import { motion, AnimatePresence } from "framer-motion";
import { FormEvent, useState } from "react";
import Image from "next/image";
import ContactForm from "../components/ContactForm";
import Link from "next/link";

const Accordion = ({
  title,
  isOpen,
  onToggle,
  children,
}: {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) => {
  return (
    <div>
      <li
        onClick={onToggle}
        className="text-white font-semibold flex flex-col bg-[#1E2D3D] pl-5 py-1 mt-1"
      >
        <div className="flex items-center cursor-pointer">
          <motion.img
            src="/assets/shared/triangle.png"
            width={12}
            height={12}
            alt="arrow"
            className="mr-4"
            initial={{ rotate: 270 }}
            animate={{ rotate: isOpen ? 360 : 270 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
          {title}
        </div>
      </li>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Contact = () => {
  const [expandedSections, setExpandedSections] = useState<{
    contacts: boolean;
    findMe: boolean;
  }>({
    contacts: false,
    findMe: false,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submit, setSubmit] = useState<null | boolean>(false);

  const today = new Date();
  const date = today.toString().split(" ").slice(0, 3).join(" ");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement;
    setFormData(() => ({
      ...formData,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmit(null);

    try {
      if (
        !formData.name ||
        !formData.message ||
        formData.message.trim() == ""
      ) {
        return;
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        setSubmit(false);
        throw new Error("Failed to submit form.");
      }

      setSubmit(true);
    } catch (error) {
      console.log(error);
      setSubmit(false);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleSection = (section: "contacts" | "findMe") => {
    setExpandedSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className="bg-[#011627] border-x border-b rounded-b-lg border-[#1e2d3d] relative h-[86vh] overflow-y-auto scroll-container">
      <div className="xl:flex xl:h-full">
        <div className="xl:w-[25%] border-r border-[#1e2d3d]">
          <h1 className="text-white font-semibold text-base pl-5 my-5">
            _contact-me
          </h1>
          <Accordion
            title="Contacts"
            isOpen={expandedSections.contacts}
            onToggle={() => toggleSection("contacts")}
          >
            <ul className="ml-5 flex flex-col gap-2 py-2">
              <Link href={"mailto:nikolozgelenidze9@gmail.com"} target="_blank">
                <li className="flex items-center">
                  <Image
                    src="/assets/contact-icons/mail-icon.png"
                    width={10}
                    height={10}
                    alt="mail"
                    className="mr-3"
                  />
                  <p className="text-[#607b96] font-semibold">
                    nikolozgelenidze9@gmail.com
                  </p>
                </li>
              </Link>
              <Link href={"tel:+995511106081"} target="_blank">
                <li className="flex items-center ">
                  <Image
                    src="/assets/contact-icons/phone-icon.png"
                    width={10}
                    height={10}
                    alt="phone-icon"
                    className="mr-3"
                  />
                  <p className="text-[#607b96] font-semibold">
                    +(995) 511 10 60 81
                  </p>
                </li>
              </Link>
            </ul>
          </Accordion>

          <Accordion
            title="find-me-also-in"
            isOpen={expandedSections.findMe}
            onToggle={() => toggleSection("findMe")}
          >
            <ul className="flex flex-col gap-1 pt-2">
              {[
                {
                  src: "/assets/shared/link.png",
                  alt: "Facebook",
                  text: "Facebook",
                  link: "https://www.facebook.com/NikolozGG/",
                },
                {
                  src: "/assets/shared/link.png",
                  alt: "Instagram",
                  text: "Instagram",
                  link: "https://www.instagram.com/nikushagelenidze/",
                },
                {
                  src: "/assets/shared/link.png",
                  alt: "LinkedIn",
                  text: "LinkedIn",
                  link: "https://www.linkedin.com/in/nikoloz-gelenidze/",
                },
              ].map(({ src, alt, text, link }) => (
                <li key={alt}>
                  <Link
                    href={link}
                    className="flex items-center ml-5"
                    target="_blank"
                  >
                    <Image
                      src={src}
                      width={10}
                      height={10}
                      alt={alt}
                      className="mr-3"
                    />
                    <p className="text-[#607b96] font-semibold break-words">
                      {text}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </Accordion>
        </div>
        <div className="xl:w-[50%] border-r border-[#1e2d3d]">
          <ContactForm
            handleSubmit={handleSubmit}
            handleInputChange={handleInputChange}
            isLoading={isLoading}
            submit={submit}
            setSubmit={setSubmit}
          />
        </div>

        <div className=" w-[50%] hidden xl:block p-28">
          <div className="flex">
            <div className="text-gray-500 text-lg mr-5">
              1
              <br />
              2
              <br />
              3
              <br />
              4
              <br />
              5
              <br />
              6
              <br />
              7
              <br />
              8
              <br />
              9
              <br />
              10
              <br />
              11
              <br />
              12
              <br />
              13
              <br />
              14
            </div>
            <div className="flex flex-col gap-[26px]">
              <div className="text-lg">
                <span className="text-[#c98bdf]">const</span>{" "}
                <span className="text-[#4B5DCE] text-semibold">button</span>{" "}
                <span className="text-[#c98bdf]">= </span>{" "}
                <span className="text-[#4B5DCE]">
                  document.querySelector{" "}
                  <span className="text-[#e99287]">
                    <span className="text-[#607b96]">{"("}</span>
                    {"'#sendBtn'"}
                    <span className="text-[#607b96]">{");"}</span>
                  </span>
                </span>
              </div>
              <div className="flex flex-col">
                <div className="text-lg">
                  <span className="text-[#c98bdf]">const</span>{" "}
                  <span className="text-[#4B5DCE]">message</span>{" "}
                  <span className="text-[#c98bdf]">= </span>{" "}
                  <span className="text-[#607b96]">{"{"}</span>
                </div>
                <div className="flex flex-col text-lg">
                  <span className="text-[#4B5DCE] mt-1">
                    name<span className="text-[#607b96]">: </span>
                    <span className="text-[#e99287]">
                      {`"${formData.name}"`}
                      <span className="text-[#607b96]">{","}</span>
                    </span>
                  </span>
                  <span className="text-[#4B5DCE]">
                    email<span className="text-[#607b96]">: </span>
                    <span className="text-[#e99287]">
                      {`"${formData.email}"`}
                      <span className="text-[#607b96]">{","}</span>
                    </span>
                  </span>
                  <span className="text-[#4B5DCE]">
                    message<span className="text-[#607b96]">: </span>
                    <span className="text-[#e99287]">
                      {`"${formData.message}"`}
                      <span className="text-[#607b96]">{","}</span>
                    </span>
                  </span>
                  <span className="text-[#607b96]">
                    date: <span className="text-[#e99287]">{`"${date}"`}</span>{" "}
                  </span>
                  <span className="text-[#607b96]">{"}"}</span>
                </div>
                <div className="flex flex-col mt-7">
                  <span className="text-[#4B5DCE]">
                    <span>
                      button.addEventListener{" "}
                      <span className="text-[#607b96]">{"("}</span>
                      <span className="text-[#e99287]">{"'click', "}</span>
                    </span>
                    <span className="text-[#607b96]">{"()"} </span>
                    <span className="text-[#c98bdf]">{"=>"} </span>
                    <span className="text-[#607b96]">{"{"}</span>
                  </span>
                  <span className="text-[#4B5DCE]">
                    form<span className="text-[#607b96]">.</span>
                    <span>{"send"}</span>
                    <span className="text-[#607b96]">{"("}</span>
                    <span>{"message"}</span>
                    <span className="text-[#607b96]">{")"}</span>
                  </span>
                  <div className="flex text-[#607b96]">
                    <span>{"}"}</span>
                    <span>{")"}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
