"use client";
import { useState } from "react";
import AboutMeSection from "../components/AboutMeSection";
import ProfileTabs from "../components/ProfileTabs";
import InfoAndSkillsSection from "../components/InfoAndSkillsSection";

const About = () => {
  const [activeTab, setActiveTab] = useState<"personal" | "professional">(
    "personal"
  );
  const [activeSection, setActiveSection] = useState(false);

  const handleTabClick = (tab: "personal" | "professional") => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-[#011627]  border-b rounded-b-lg h-[86vh] relative">
      <div className="xl:flex absolute top-0 left-0 w-full h-full">
        <AboutMeSection
          handleTabClick={handleTabClick}
          setActiveSection={setActiveSection}
          activeTab={activeTab}
        />
        <div className="flex flex-col">
          <ProfileTabs
            handleTabClick={handleTabClick}
            activeTab={activeTab}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
          <InfoAndSkillsSection activeTab={activeTab} />
        </div>
      </div>
    </div>
  );
};

export default About;
