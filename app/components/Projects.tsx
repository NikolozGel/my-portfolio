"use-client";
import Image from "next/image";
import Link from "next/link";
import GithubIcon from "../../public/assets/contact-icons/github.svg";

interface IProjects {
  id: number;
  name: string;
  techstack: string[];
  img: string;
  liveLink: string;
}

const ProjectCard = ({ id, name, techstack, img, liveLink }: IProjects) => {
  return (
    <>
      <div>
        <p className="text-lg text-[#4D5BCE] ">Project {id}</p>
        <div className="border border-[#1e2d3d] rounded-xl overflow-hidden">
          <Image
            src={img}
            width={500}
            height={500}
            alt={img}
            className="object-cover m-w-[370px] h-[250px]"
          />
          <div className="bg-[#011221] p-8">
            <p className="text-[#607B96]">{name}</p>
            <div className="flex justify-between mt-3">
              <button className="bg-[#1C2B3A] text-white text-lg rounded-md py-2.5 px-3.5 hover:text-[#4D5BCE] ">
                view-project
              </button>
              <Link href={liveLink} target="_blank">
                <Image
                  src={GithubIcon}
                  width={50}
                  height={50}
                  alt={GithubIcon}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
