"use client";
import { FormEvent, useState } from "react";
import ContactForm from "../components/contactForm/ContactForm";
import Accordion from "../components/accordion/Accordion";
import CodeSnippet from "../components/accordion/CodeSnippet";
import AccordionContact from "../components/accordion/AccordionContact";
import AccordionFindMe from "../components/accordion/AccordionFindMe";

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
    <div className="bg-[#011627] rounded-b-lg relative h-[86vh] overflow-y-auto scroll-container">
      <div className="xl:flex h-full">
        <div className="xl:w-[30%] border-r border-[#1e2d3d]">
          <h1 className="text-white font-semibold text-base pl-5 my-5">
            _contact-me
          </h1>
          <Accordion
            title="Contacts"
            isOpen={expandedSections.contacts}
            onToggle={() => toggleSection("contacts")}
          >
            <AccordionContact />
          </Accordion>

          <Accordion
            title="find-me-also-in"
            isOpen={expandedSections.findMe}
            onToggle={() => toggleSection("findMe")}
          >
            <AccordionFindMe />
          </Accordion>
        </div>
        <div className="xl:w-[50%] xl:relative border-r border-[#1e2d3d] overflow-y-hidden">
          <ContactForm
            handleSubmit={handleSubmit}
            handleInputChange={handleInputChange}
            isLoading={isLoading}
            submit={submit}
            setSubmit={setSubmit}
          />
        </div>
        <CodeSnippet formData={formData} />
      </div>
    </div>
  );
};

export default Contact;
