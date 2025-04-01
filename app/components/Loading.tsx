import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <motion.div
        className="spinner flex"
        animate={{
          rotate: 360,
        }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear",
        }}
        style={{
          width: "100px",
          height: "100px",
          border: "5px solid #ccc",
          borderTop: "5px solid #4D5BCE",
          borderRadius: "50%",
        }}
      />
    </div>
  );
};

export default Loading;
