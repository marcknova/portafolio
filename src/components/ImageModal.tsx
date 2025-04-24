import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// @ts-expect-error android
import "swiper/css";
// @ts-expect-error android
import "swiper/css/navigation";
import { FaReact, FaNodeJs, FaCube } from "react-icons/fa";
import {
  SiExpo,
  SiFirebase,
  SiTypescript,
  SiPhp,
  SiFlutter,
  SiKotlin,
  SiTailwindcss,
  SiFigma,
  SiReactquery,
  SiRedhat,
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
  React: <FaReact className="text-cyan-500 text-2xl md:text-3xl" />,
  Recharts: <SiRedhat className="text-orange-500 text-2xl md:text-3xl" />,
  "React Query": (
    <SiReactquery className="text-pink-600 text-2xl md:text-3xl" />
  ),
  TanStackQuery: (
    <SiReactquery className="text-pink-600 text-2xl md:text-3xl" />
  ),
  "shadcn/ui": <FaCube className="text-gray-700 text-2xl md:text-3xl" />,
};

interface ImageModalProps {
  images: string[];
  technologies: string;
}

export default function ImageModal({ images, technologies }: ImageModalProps) {
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
          loading="lazy"
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
              className="relative bg-white rounded-lg p-3 shadow-xl max-w-7xl w-full z-10"
            >
              <DialogPanel>
                <div className="flex flex-col md:flex-row md:h-[750px]">
                  <div className="w-full md:w-[100%] md:h-full flex justify-center items-center">
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
                            loading="lazy"
                            className="rounded-lg w-full h-full max-h-[750px] object-contain"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              </DialogPanel>

              <div className="md:absolute bottom-5 right-10 flex justify-center z-10">
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
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
}
