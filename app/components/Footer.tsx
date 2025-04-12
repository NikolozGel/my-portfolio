"use client";
import Image from "next/image";
import gitHubIcon from "../../public/assets/contact-icons/github.svg";
import FbIcon from "../../public/assets/contact-icons/facebook.svg";
import Linkedin from "../../public/assets/contact-icons/linkedin.svg";

const Footer = ({ isMenuOpen }: { isMenuOpen: boolean }) => {
  return (
    <>
      <footer
        className={`${
          isMenuOpen ? "block" : "hidden xl:block"
        } border-t xl:border border-[#1E2D3D] bg-[#011627] rounded-b-lg bottom-0 absolute w-full`}
      >
        <div className="flex justify-between items-center px-3">
          <p className="text-[#607B96]">find me in:</p>
          <div className="flex">
            <div className="flex xl:absolute xl:left-[10%] xl:border-r xl:border-[#1E2D3D]">
              <div className="border-l border-[#1E2D3D] p-3">
                <a
                  href="https://www.facebook.com/NikolozGG/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image src={FbIcon} width={30} height={30} alt={FbIcon} />
                </a>
              </div>
              <div className="border-l border-[#1E2D3D] p-3">
                <a
                  href="https://www.linkedin.com/in/nikoloz-gelenidze/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image src={Linkedin} width={30} height={30} alt={Linkedin} />
                </a>
              </div>
            </div>
            <div>
              <a
                href="https://github.com/NikolozGel/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="border-l border-[#1E2D3D] p-3 xl:flex xl:items-center xl:gap-3">
                  <span className="hidden xl:block text-[#607B96]">
                    @nikolozGel
                  </span>

                  <Image
                    src={gitHubIcon}
                    width={30}
                    height={30}
                    alt={gitHubIcon}
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
