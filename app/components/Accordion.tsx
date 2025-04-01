import { AnimatePresence, motion } from "framer-motion";

const Accordion = ({
  title,
  isOpen,
  onToggle,
  children,
}: {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) => {
  return (
    <div>
      <li
        onClick={onToggle}
        className="text-white font-semibold flex flex-col bg-[#1E2D3D] pl-5 py-1 mt-1"
      >
        <div className="flex items-center cursor-pointer">
          <motion.img
            src="/assets/shared/triangle.png"
            width={12}
            height={12}
            alt="arrow"
            className="mr-4"
            initial={{ rotate: 270 }}
            animate={{ rotate: isOpen ? 360 : 270 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
          {title}
        </div>
      </li>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
