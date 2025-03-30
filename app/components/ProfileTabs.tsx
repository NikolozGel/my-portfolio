import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

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
  return (
    <div className="hidden xl:flex border-b border-[#1e2d3d]">
      <button
        className="w-[150px] py-4 border-r text-[#607b96] border-[#1e2d3d] flex justify-center items-center gap-2"
        onClick={() => (handleTabClick("personal"), activeTab === "personal")}
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
  );
};

export default ProfileTabs;
