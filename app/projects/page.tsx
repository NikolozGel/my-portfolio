"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import data from "../../data.json";
import Image from "next/image";
import ProjectCard from "../components/Projects";
import MyProjects from "../../data.json";
import Link from "next/link";

const Projects = () => {
  const [techStacks, setTechStacks] = useState(true);
  const [selectedTechStacks, setSelectedTechStacks] = useState<string[]>([]);
  const [filteredProjects, setFilteredProjects] = useState(MyProjects.projects);
  const [isHovered, setIsHovered] = useState<number | null>(null);

  const handleCheckboxChange = (name: string) => {
    setSelectedTechStacks((prevSelectedTechStacks) => {
      return prevSelectedTechStacks.includes(name)
        ? prevSelectedTechStacks.filter((techName) => techName !== name)
        : [...prevSelectedTechStacks, name];
    });
  };

  const handleRemoveTech = (name: string) => {
    setSelectedTechStacks((prev) => prev.filter((tech) => tech !== name));
  };

  useEffect(() => {
    if (selectedTechStacks.length === 0) {
      setFilteredProjects(MyProjects.projects);
    } else {
      const filtered = MyProjects.projects.filter((project) =>
        selectedTechStacks.every((tech) => project.techstack.includes(tech))
      );
      setFilteredProjects(filtered);
    }
  }, [selectedTechStacks]);

  const handleFilter = () => {
    if (selectedTechStacks.length === 0) {
      setFilteredProjects(MyProjects.projects);
    } else {
      const filtered = MyProjects.projects.filter((project) =>
        selectedTechStacks.every((tech) => project.techstack.includes(tech))
      );
      setFilteredProjects(filtered);
    }
  };

  return (
    <div className="bg-[#011627] border-x border-b rounded-b-lg border-[#1e2d3d] h-[86vh] overflow-y-auto">
      <div className="xl:flex ">
        <div className="border-r border-[#1e2d3d] xl:h-[85vh] xl:fixed">
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
                    width={12}
                    height={12}
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
                            checked={selectedTechStacks.includes(item.name)}
                            onChange={() => {
                              handleCheckboxChange(item.name);
                              handleFilter();
                            }}
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
        </div>

        <div className="xl:ml-[250px] w-full">
          <AnimatePresence>
            {selectedTechStacks.length > 0 && (
              <motion.div
                className=" hidden xl:flex border-b w-full border-[#1e2d3d]"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <AnimatePresence>
                  {selectedTechStacks.map((tech, index) => (
                    <motion.button
                      key={tech}
                      className="px-5 py-4 group text-[#607b96] relative text-lg border-r border-[#1e2d3d] flex items-center justify-center"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.5 }}
                      onMouseEnter={() => setIsHovered(index)}
                      onMouseLeave={() => setIsHovered(null)}
                    >
                      {isHovered === index && (
                        <motion.span
                          className="border-b-[3.4px] border-b-[#1e2d3d] absolute bottom-0 left-0"
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 0.4 }}
                        />
                      )}

                      {tech}
                      <Image
                        src={"/assets/shared/delete.png"}
                        width={12}
                        height={12}
                        className="w-[12px] h-[12px] ml-5"
                        alt="deleteImage"
                        onClick={() => handleRemoveTech(tech)}
                      />
                    </motion.button>
                  ))}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-10 mb-5 flex ml-5">
            <p className="text-white text-lg xl:hidden">
              {"//"} projects
              {selectedTechStacks.length !== 0 && (
                <span className="text-gray-500 text-lg ml-5">
                  {`/${selectedTechStacks.join("; ")}`}
                </span>
              )}
            </p>
          </div>
          <div className="px-4">
            <div className="flex justify-evenly flex-wrap gap-24">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
            <Link href="https://github.com/NikolozGel" target="_blank">
              <div className="flex justify-center mt-10">
                <button className="bg-[#5565E8] py-2.5 px-3.5 text-xl font-bold rounded-lg">
                  SEE MORE ON GITHUB
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
