import { AnimatePresence, motion } from "framer-motion";
import data from "../../data.json";
import Image from "next/image";

const InfoAndSkillsSection = ({
  activeTab,
}: {
  activeTab: "professional" | "personal";
}) => {
  return (
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
                ? "/* As a Front end Engineer, I am constantly striving to improve my skills and learn new technologies. I stepped into this big Tech world 2 years ago and I found myself very flexible and adaptive to learning new things. */"
                : `/* Hi, I am Nikoloz Gelenidze, ${age} years old from Tbilisi, Georgia. I can confidently say that I am a highly motivated and goal-oriented individual who consistently strives to achieve his objectives every single day. */`}
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
        {/* <button className="mt-5">Download CV <Image width={} height={} src={} alt="" /> </button> */}
      </div>
    </div>
  );
};

export default InfoAndSkillsSection;

function calculateAge(birthDate: string) {
  const today = new Date();
  const birthDateObj = new Date(birthDate);
  let age = today.getFullYear() - birthDateObj.getFullYear();
  const monthDifference = today.getMonth() - birthDateObj.getMonth();

  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDateObj.getDate())
  ) {
    age--;
  }

  return age;
}

const age = calculateAge("1998-11-19");
