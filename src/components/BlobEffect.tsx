import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Profile from "../assets/portafolio/profilepicture.jpg"; // ✅ Usamos tu imagen directamente

export default function BlobEffect() {
  const controls = useAnimation();

  useEffect(() => {
    const animateBlob = async () => {
      while (true) {
        await controls.start({
          borderRadius: [
            "50% 50% 50% 50%",
            "45% 55% 50% 50%",
            "50% 50% 55% 45%",
            "48% 52% 50% 50%",
            "50% 50% 50% 50%",
          ],
          transition: {
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          },
        });
      }
    };

    animateBlob();
  }, [controls]);

  return (
    <motion.div
      className="relative md:w-[300px] md:h-[300px] w-[200px] h-[200px] md:my-0 my-10 overflow-hidden flex items-center justify-center"
      animate={controls}
      whileHover={{
        scale: 1.1,
        rotate: [0, 2, -2, 0],
      }}
    >
      <motion.img
        src={Profile}
        className="w-full h-full object-cover"
        animate={{
          scale: [1, 1.1, 1],
          transition: { duration: 5, ease: "easeInOut", repeat: Infinity },
        }}
      />
    </motion.div>
  );
}
