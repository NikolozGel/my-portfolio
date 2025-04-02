import Link from "next/link";
import Image from "next/image";

const AccordionFindMe = () => {
  return (
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
          <Link href={link} className="flex items-center ml-5" target="_blank">
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
