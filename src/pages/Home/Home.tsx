import { Proyectos } from "../../../utils/Proyectos";
import { FaGithub, FaYoutube, FaGooglePlay, FaGlobe } from "react-icons/fa";
import { SiFigma, SiNpm, SiAdobeacrobatreader } from "react-icons/si";
import { lazy, Suspense } from "react";
import Profile from "/profile.png";

const Home = () => {
  const ImageModal = lazy(() => import("../../components/ImageModal"));

  return (
    <div className="w-full md:h-screen p-0 m-0">
      <div className="w-full h-2 bg-sky-500"></div>
      <div className="bg-[#030918] w-full h-full p-10 flex lg:flex-row-reverse flex-col-reverse justify-evenly items-center ">
        <div className="md:w-80 md:h-80 lg:mr-20">
          <div className="relative md:w-[300px] md:h-[300px] w-[200px] h-[200px] rounded-3xl  md:my-0 my-10 overflow-hidden flex items-center justify-center">
            <img
              src={Profile}
              className="w-full h-full object-cover"
              alt="Profile Picture"
            />
          </div>
        </div>
        <div className="max-w-[45rem]">
          <h1 className="text-white md:text-left text-center md:text-5xl my-5 font-bold">
            {"<Hello! Soy Marco Antonio Monterrosas>"}
          </h1>
          <p className="md:text-left text-center  md:text-lg medium text-white">
            Soy un desarrollador de software con experiencia en el desarrollo de
            aplicaciones móviles y web, especializado en React Native, Expo,
            TypeScript y PHP. Me apasiona crear soluciones tecnológicas
            eficientes, optimizando rendimiento, seguridad y escalabilidad.
          </p>
        </div>
      </div>
      <div className="my-16">
        <div className="text-xl p-10 text-center">
          <h2 className="font-2xl font-semibold">Mis Projectos</h2>
          <p>Lista de projectos en los que he trabajado</p>
        </div>
        <div className="md:px-10 justify-center flex flex-wrap">
          {Proyectos.map((proyecto, index) => (
            <div
              key={index}
              className="xl:w-[28rem] md:h-[43rem] h-[48rem] my-5 shadow-sm shadow-blue-300 p-5 rounded-2xl mx-5 relative flex flex-col justify-between"
            >
              <div className="relative w-full rounded-2xl overflow-hidden group">
                <Suspense>
                  <ImageModal
                    images={proyecto.images}
                    technologies={proyecto.technologies}
                  />
                </Suspense>
              </div>
              <div className="mx-3 md:p-1">
                <h1 className="font-bold md:text-xl md:my-0 my-3">
                  {proyecto.title}
                </h1>
                <p className="md:text-base text-sm leading-8">
                  {proyecto.descriptioRapida}
                </p>
              </div>

              <div className="flex md:justify-end justify-center gap-4 mt-4 px-5">
                {proyecto.links?.github && (
                  <a
                    href={proyecto.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="text-black text-3xl w-7 h-7 hover:text-gray-600 transition" />
                  </a>
                )}
                {proyecto.links?.video && (
                  <a
                    href={proyecto.links.video}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaYoutube className="text-red-600 text-3xl w-7 h-7 hover:text-red-400 transition" />
                  </a>
                )}
                {proyecto.links?.figma && (
                  <a
                    href={proyecto.links.figma}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiFigma className="text-black text-3xl w-7 h-7 hover:text-gray-600 transition" />
                  </a>
                )}
                {proyecto.links?.googlePlay && (
                  <a
                    href={proyecto.links.googlePlay}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGooglePlay className="text-black text-3xl w-7 h-7 hover:text-gray-600 transition" />
                  </a>
                )}
                {proyecto.links?.npm && (
                  <a
                    href={proyecto.links.npm}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiNpm className="text-red-500 text-3xl w-7 h-7 hover:text-red-400 transition" />
                  </a>
                )}
                {proyecto.links?.pdf && (
                  <a
                    href={proyecto.links.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiAdobeacrobatreader className="text-red-600 text-3xl w-7 h-7 hover:text-red-400 transition" />
                  </a>
                )}
                {proyecto.links?.web && (
                  <a
                    href={proyecto.links.web}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGlobe className="text-black w-7 h-7 hover:text-gray-600 transition" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#030918]">
        <div className=" text-white h-64 p-10 flex md:flex-row flex-col md:justify-between items-center px-10 md:mx-36 lg:mx-72">
          <div>
            <h1 className="font-semibold text-lg"> © 2025 marck </h1>
          </div>
          <div className="md:my-0 my-20">
            <a
              href={"https://github.com/marcknova"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-white text-4xl w-10 h-10 hover:text-gray-600 transition" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
