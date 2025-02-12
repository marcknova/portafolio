import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiExpo,
  SiFirebase,
  SiTypescript,
  SiPhp,
  SiFlutter,
  SiKotlin,
  SiTailwindcss,
  SiFigma,
} from "react-icons/si";

const techIcons: { [key: string]: JSX.Element } = {
  "React Native": <FaReact className="text-blue-500 text-2xl md:text-3xl" />,
  Expo: <SiExpo className="text-black text-2xl md:text-3xl" />,
  TypeScript: <SiTypescript className="text-blue-700 text-2xl md:text-3xl" />,
  PHP: <SiPhp className="text-purple-500 text-2xl md:text-3xl" />,
  Flutter: <SiFlutter className="text-blue-400 text-2xl md:text-3xl" />,
  Firebase: <SiFirebase className="text-yellow-500 text-2xl md:text-3xl" />,
  "Node.js": <FaNodeJs className="text-green-500 text-2xl md:text-3xl" />,
  Kotlin: <SiKotlin className="text-purple-500 text-2xl md:text-3xl" />,
  "Tailwind CSS": (
    <SiTailwindcss className="text-blue-400 text-2xl md:text-3xl" />
  ),
  Figma: <SiFigma className="text-black text-2xl md:text-3xl" />,
};

interface ImageModalProps {
  images: string[];
  title: string;
  description: string;
  technologies: string;
}

export default function ImageModal({
  images,
  title,
  description,
  technologies,
}: ImageModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const techList = technologies.split(", ");

  return (
    <>
      <div
        className="relative cursor-pointer group h-[270px]"
        onClick={() => setIsOpen(true)}
      >
        <img
          src={images[0]}
          className="w-full h-full object-contain rounded-2xl transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <Dialog
            as={motion.div}
            open={isOpen}
            onClose={() => setIsOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
          >
            <motion.div
              className="absolute inset-0 bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="relative bg-white p-6 rounded-lg shadow-xl max-w-6xl w-full z-10"
            >
              <DialogPanel>
                <div className="flex flex-col md:flex-row md:h-[570px]">
                  <div className="w-full md:w-[60%] h-full flex justify-center items-center">
                    <Swiper
                      modules={[Navigation]}
                      navigation
                      loop
                      className="w-full h-full"
                    >
                      {images.map((img, index) => (
                        <SwiperSlide
                          key={index}
                          className="flex justify-center items-center"
                        >
                          <motion.img
                            src={img}
                            className="rounded-lg w-full h-auto max-h-[600px] object-contain"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>

                  <div className="w-full md:w-[40%] p-6 flex flex-col items-center justify-center">
                    <h1 className="text-2xl font-semibold">{title}</h1>
                    <p className="mt-3 text-gray-700">{description}</p>

                    <div className="mt-4">
                      <h2 className="text-lg font-semibold text-gray-600">
                        Tecnologías utilizadas:
                      </h2>
                      <div className="flex gap-4 md:mt-2 mt-5">
                        {techList.map((tech, index) => (
                          <div key={index} title={tech}>
                            {techIcons[tech] || (
                              <span className="text-gray-500">{tech}</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
}
