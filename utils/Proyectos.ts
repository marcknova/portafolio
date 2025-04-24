import AppM1 from "/AppMobile/WIDO_1.jpg";
import AppM3 from "/AppMobile/WIDO_2.jpg";
import AppM6 from "/AppMobile/WIDO_3.jpg";
import AppM7 from "/AppMobile/WIDO_4.jpg";
import Gougo1 from "/Gougo/gougo1.png";
import Gougo2 from "/Gougo/gougo2.png";
import Gougo3 from "/Gougo/Rutas.png";
import Gougo4 from "/Gougo/Producto2.png";
import Gougo5 from "/Gougo/Producto.png";
import Gougo6 from "/Gougo/Check-out.png";
import Gougo7 from "/Gougo/Login.png";
import weather1 from "/WeatherApplication/screen1.png";
import weather2 from "/WeatherApplication/screen2.png";
import weather3 from "/WeatherApplication/screen3.png";
import weather4 from "/WeatherApplication/screen4.png";
import weather5 from "/WeatherApplication/screen5.png";
import tracker1 from "/TrackerApp/tracker1.png";
import tracker2 from "/TrackerApp/tracker2.png";
import tracker3 from "/TrackerApp/tracker3.png";
import tracker4 from "/TrackerApp/tracker4.png";
import tracker5 from "/TrackerApp/tracker5.png";
import tracker6 from "/TrackerApp/tracker6.png";

export const Proyectos = [
  {
    title: "Wido App",
    images: [AppM1, AppM3, AppM6, AppM7],
    descriptioRapida:
      "Trabajé en el desarrollo de una aplicación móvil y optimización del backend, implementando pagos con Stripe, autenticación con React Context y navegación fluida con Expo Router. También optimicé la API en PHP con MVC, mejorando la seguridad y reduciendo tiempos de respuesta. Configuré pruebas con Postman y optimicé la integración de Git con el servidor, asegurando un despliegue eficiente con EAS Build.",
    description: "",
    technologies: "React Native, Expo, TypeScript, PHP, Tailwind CSS",
    links: {
      github: "https://github.com/MikePeregrina/AeroApp",
      video: "",
      pdf: "/portafolio/CartaLaboral.pdf",
      npm: "",
      web: "https://widolearn.com/",
    },
  },
  {
    title: "Gougo Mobile",
    images: [Gougo1, Gougo2, Gougo3, Gougo4, Gougo5, Gougo6, Gougo7],
    descriptioRapida:
      "Trabaje en la migración de una aplicación de Kotlin a Expo con React Native, mejorando rendimiento y seguridad. Implementé Expo SQLite para optimizar la gestión de datos y Zustand para un manejo eficiente del estado global. Desarrollé un Config Plugin en Expo para detectar y bloquear Fake GPS, asegurando la autenticidad en Check-in y Check-out. También creé un módulo nativo en Expo con Kotlin para validar cambios en la fecha y hora del dispositivo sin necesidad de ejectar Expo.",
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
  {
    title: "Aplicación de seguimiento de gastos",
    images: [tracker1, tracker2, tracker3, tracker4, tracker5, tracker6],
    descriptioRapida:
      "Aplicacion movil desarrollada en React Native que permite a los usuarios registrar y gestionar sus gastos de manera eficiente. La aplicación cuenta con una interfaz intuitiva y fácil de usar, donde los usuarios pueden agregar, editar y eliminar gastos, así como visualizar un resumen de sus finanzas. Utiliza Expo para el desarrollo multiplataforma y TypeScript para garantizar un código robusto y mantenible. Además, la aplicación implementa almacenamiento local para guardar los datos de los gastos, lo que permite a los usuarios acceder a su información incluso sin conexión a internet.",
    description: "",
    technologies: "Expo, TypeScript, Recharts, TanStackQuery, shadcn/ui",
    links: {
      github: "https://github.com/marcknova/expense-tracker",
      web: "https://gilded-souffle-588f95.netlify.app/",
    },
  },
  {
    title: "🌤️ Aplicación del Clima",
    images: [weather1, weather2, weather3, weather4, weather5],
    descriptioRapida:
      "Aplicación web desarrollada en React que consume datos en tiempo real desde la API de OpenWeather. La interfaz muestra el clima actual, temperaturas máximas y mínimas, salida y puesta del sol, presión atmosférica, dirección y velocidad del viento. Incorpora una gráfica de temperatura, generada dinámicamente con Recharts. También incluye un pronóstico detallado de los próximos 5 días con información extendida de humedad y viento, todo presentado de forma responsiva y optimizada",
    description: "",
    technologies:
      "React, TypeScript, Tailwind CSS, Recharts, TanStackQuery, shadcn/ui",
    links: {
      github: "https://github.com/marcknova/weatherAplication",
      web: "https://gilded-souffle-588f95.netlify.app/",
    },
  },
];
