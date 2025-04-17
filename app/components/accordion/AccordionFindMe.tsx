import Link from "next/link";
import Image from "next/image";
import sharedImg from "../../../public/assets/shared/link.png";

const AccordionFindMe = () => {
  return (
    <ul className="flex flex-col gap-1 pt-2">
      {[
        {
          src: sharedImg,
          alt: "Facebook",
          text: "Facebook",
          link: "https://www.facebook.com/NikolozGG/",
        },
        {
          src: sharedImg,
          alt: "Instagram",
          text: "Instagram",
          link: "https://www.instagram.com/nikushagelenidze/",
        },
        {
          src: sharedImg,
          alt: "LinkedIn",
          text: "LinkedIn",
          link: "https://www.linkedin.com/in/nikoloz-gelenidze/",
        },
      ].map(({ src, alt, text, link }) => (
        <li
          key={alt}
          className="hover:opacity-60 transition duration-300 ease-in-out"
        >
          <Link href={link} className="flex items-center ml-5" target="_blank ">
            <Image
              src={src}
              width={10}
              height={10}
              alt={alt}
              className="mr-3"
            />
            <p className="text-[#607b96] font-semibold break-words">{text}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default AccordionFindMe;
