import Link from "next/link";
import Image from "next/image";

const AccordionContact = () => {
  return (
    <ul className="ml-5 flex flex-col gap-2 py-2">
      <Link href={"mailto:nikolozgelenidze9@gmail.com"} target="_blank">
        <li className="flex items-center">
          <Image
            src="/assets/contact-icons/mail-icon.png"
            width={10}
            height={10}
            alt="mail"
            className="mr-3"
          />
          <p className="text-[#607b96] font-semibold">
            nikolozgelenidze9@gmail.com
          </p>
        </li>
      </Link>
      <Link href={"tel:+995511106081"} target="_blank">
        <li className="flex items-center ">
          <Image
            src="/assets/contact-icons/phone-icon.png"
            width={10}
            height={10}
            alt="phone-icon"
            className="mr-3"
          />
          <p className="text-[#607b96] font-semibold">+(995) 511 10 60 81</p>
        </li>
      </Link>
    </ul>
  );
};

export default AccordionContact;
