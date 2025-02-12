import AppM1 from "../src/assets/AppMobile/WIDO_1.jpg";
import AppM2 from "../src/assets/AppMobile/WIDO_2.jpg";
import AppM3 from "../src/assets/AppMobile/WIDO_3.jpg";
import AppM4 from "../src/assets/AppMobile/WIDO_4.jpg";
import Gougo1 from "../src/assets/Gougo/gougo1.png";
import Gougo2 from "../src/assets/Gougo/gougo2.png";
import Gougo3 from "../src/assets/Gougo/Rutas.png";
import Gougo4 from "../src/assets/Gougo/Producto2.png";
import Gougo5 from "../src/assets/Gougo/Producto.png";
import Gougo6 from "../src/assets/Gougo/Check-out.png";
import Gougo7 from "../src/assets/Gougo/Login.png";

export const Proyectos = [
  {
    title: "AeroApp",
    images: [AppM1, AppM2, AppM3, AppM4],
    descriptioRapida:
      "Trabajé en el desarrollo de una aplicación móvil y optimización del backend, implementando pagos con Stripe, autenticación con React Context y navegación fluida con Expo Router. También optimicé la API en PHP con MVC, mejorando la seguridad y reduciendo tiempos de respuesta. Configuré pruebas con Postman y optimicé la integración de Git con el servidor, asegurando un despliegue eficiente con EAS Build.",
    description: "",
    technologies: "React Native, Expo, TypeScript, PHP, Tailwind CSS",
    links: {
      github: "https://github.com/MikePeregrina/AeroApp",
      video: "",
      pdf: "../pdfs/CartaLaboral.pdf",
      npm: "",
    },
  },
  {
    title: "Gougo Mobile",
    images: [Gougo1, Gougo2, Gougo3, Gougo4, Gougo5, Gougo6, Gougo7],
    descriptioRapida:
      "Lideré la migración de una aplicación de Kotlin a Expo con React Native, mejorando rendimiento y seguridad. Implementé Expo SQLite para optimizar la gestión de datos y Zustand para un manejo eficiente del estado global. Desarrollé un Config Plugin en Expo para detectar y bloquear Fake GPS, asegurando la autenticidad en Check-in y Check-out. También creé un módulo nativo en Expo con Kotlin para validar cambios en la fecha y hora del dispositivo sin necesidad de ejectar Expo.",
    description: "",
    technologies: "Kotlin, TypeScript, Node.js, Tailwind CSS, Expo",
    links: {
      npm: "https://www.npmjs.com/package/expo-device-time-check",
      github: "https://github.com/marcknova/expo-device-time-check",
      figma:
        "https://www.figma.com/design/LDNOp9mKx6WZF5UfqNQqM9/Gougo-UI-UX?node-id=1403-4137",
      googlePlay:
        "https://play.google.com/store/apps/details?id=mx.neaxis.gougo&pcampaignid=web_share",
    },
  },
];
