"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import data from "../../data.json";

const Projects = () => {
  const [techStacks, setTechStacks] = useState(true);
  const [selectedTechStacks, setSelectedTechStacks] = useState<string[]>([]);

  const handleCheckboxChange = (name: string) => {
    setSelectedTechStacks((prevSelectedTechStacks) => {
      return prevSelectedTechStacks.includes(name)
        ? prevSelectedTechStacks.filter((techName) => techName !== name)
        : [...prevSelectedTechStacks, name];
    });
  };

  return (
    <div className="bg-[#011627] border-x border-b rounded-b-lg border-[#1e2d3d] h-[86vh] overflow-y-auto">
      <div className="xl:flex">
        <div className="border-r border-[#1e2d3d]">
          <h1 className="text-white font-semibold text-base pl-5 mb-5 pt-4">
            _projects
          </h1>

          <nav>
            <ul className="xl:w-[250px]">
              <li className="text-white font-[450] flex flex-col bg-[#1E2D3D] pl-5 py-1 mb-2">
                <button
                  onClick={() => setTechStacks((prev) => !prev)}
                  className="flex items-center cursor-pointer"
                >
                  <motion.img
                    src={"/assets/shared/triangle.png"}
                    width={9}
                    height={9}
                    alt="arrow"
                    className="mr-4"
                    initial={{ rotate: 360 }}
                    animate={{ rotate: techStacks ? 360 : 270 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                  TechStacks
                </button>
              </li>

              <AnimatePresence>
                {techStacks && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <div className="flex flex-col gap-3 pl-2 py-1">
                      {data.techStacks.map((item) => (
                        <div key={item.id} className="flex items-center mr-4">
                          <input
                            type="checkbox"
                            id={`tech-${item.id}`}
                            onChange={() => handleCheckboxChange(item.name)}
                          />
                          <label
                            htmlFor={`tech-${item.id}`}
                            className="ml-4 text-white text-lg font-extralight"
                          >
                            {item.name}
                          </label>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </ul>
          </nav>

          <div className="ml-4 mt-24">
            <span className="text-white font-[450] lg:hidden">
              {"// projects "}
            </span>
            <span className="text-[#607b96] font-semibold">
              {selectedTechStacks.length > 0
                ? `/${selectedTechStacks.join("; ")}`
                : ""}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-5 w-full m-auto justify-evenly overflow-y-auto mt-14 px-20">
          <div className="bg-red-500 w-[400px] h-[330px]">
            <h1 className="text-white text-xl">Project 1</h1>
            <div className="">ss</div>
          </div>
          <div className="bg-red-500 w-[400px] h-[330px]">
            <h1 className="text-white text-xl">Project 1</h1>
            <div className="">ss</div>
          </div>
          <div className="bg-red-500 w-[400px] h-[330px]">
            <h1 className="text-white text-xl">Project 1</h1>
            <div className="">ss</div>
          </div>
          <div className="bg-red-500 w-[400px] h-[330px]">
            <h1 className="text-white text-xl">Project 1</h1>
            <div className="">ss</div>
          </div>
          <div className="bg-red-500 w-[400px] h-[330px]">
            <h1 className="text-white text-xl">Project 1</h1>
            <div className="">ss</div>
          </div>
          <div className="bg-red-500 w-[400px] h-[330px]">
            <h1 className="text-white text-xl">Project 1</h1>
            <div className="">ss</div>
          </div>
          <div className="bg-red-500 w-[400px] h-[330px]">
            <h1 className="text-white text-xl">Project 1</h1>
            <div className="">ss</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
