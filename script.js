const loadingScreen = document.getElementById("loading-screen");
const floatingCircle = document.getElementById("floating-circle");
const profileImg = document.getElementById("profile-img");
const mainContent = document.getElementById("main-content");
const profilePlaceholder = document.getElementById("profile-placeholder");
const heroText = document.getElementById("hero-text");

setTimeout(() => {
  loadingScreen.classList.add("contracting");

  setTimeout(() => {
    loadingScreen.style.display = "none";
    document.getElementById("top-bar").classList.add("visible");
    mainContent.style.display = "block";

    floatingCircle.style.opacity = "1";

    setTimeout(() => {
      const rect = profilePlaceholder.getBoundingClientRect();
      const targetCenterX = rect.left + rect.width / 2;
      const targetCenterY = rect.top + rect.height / 2;

      const circleSize = rect.width + "px";
      floatingCircle.style.width = circleSize;
      floatingCircle.style.height = circleSize;
      floatingCircle.style.left = targetCenterX + "px";
      floatingCircle.style.top = targetCenterY + "px";

      profileImg.src = "public/profile-picture.jpeg";
      profileImg.onload = () => {
        profileImg.classList.add("visible");
        floatingCircle.style.backgroundColor = "transparent";
      };

      setTimeout(() => {
        const rect = profilePlaceholder.getBoundingClientRect();
        const scrollY = window.scrollY;
        const scrollX = window.scrollX;

        floatingCircle.style.position = "absolute";
        floatingCircle.style.top = rect.top + scrollY + rect.height / 2 + "px";
        floatingCircle.style.left = rect.left + scrollX + rect.width / 2 + "px";
      }, 900);

      setTimeout(() => {
        heroText.classList.add("visible");
        document.body.style.overflow = "auto";
        document.getElementById("footer").classList.add("visible");
      }, 700);
    }, 150);
  }, 1200);
}, 2000);

const projects = {
  wido: {
    title: "Wido App",
    images: [
      "public/AppMobile/WIDO_1.jpg",
      "public/AppMobile/WIDO_2.jpg",
      "public/AppMobile/WIDO_3.jpg",
      "public/AppMobile/WIDO_4.jpg",
    ],
    description: `Wido es una plataforma de aprendizaje en línea orientada a clases en tiempo real entre estudiantes y mentores — un modelo más cercano e interactivo que plataformas como Udemy o Coursera. Fui el primer desarrollador mobile del proyecto: el equipo manejaba únicamente stack web, por lo que propuse e implementé React Native con Expo desde cero para llevar la experiencia al móvil sin fragmentar el equipo en dos tecnologías distintas.\n
Me encargué del desarrollo completo de la aplicación: arquitectura de navegación con Expo Router, sistema de autenticación, diseño e implementación de interfaces, integración con la API del backend y pagos en línea con Stripe. Trabajé en sincronía con un equipo de tres personas donde cada uno operaba en paralelo, lo que exigió criterio propio para tomar decisiones técnicas sin bloquear al resto.\n
Más adelante asumí también responsabilidades en el backend PHP, donde reestructuré las funciones del servidor aplicando el patrón MVC, mejorando la organización del código, reduciendo superficie de ataque y optimizando los tiempos de respuesta de la API. El despliegue web se configuró sobre Hostinger con integración continua vía Git.`,
  },
  gougo: {
    title: "Gougo Mobile",
    images: [
      "public/Gougo/gougo1.png",
      "public/Gougo/gougo2.png",
      "public/Gougo/Rutas.png",
      "public/Gougo/Producto2.png",
      "public/Gougo/Producto.png",
      "public/Gougo/Check-out.png",
      "public/Gougo/Login.png",
    ],
    description: `Gougo Mobile es una plataforma de gestión de personal en campo utilizada por empresas para coordinar rutas de trabajo, captura de evidencia fotográfica, reportes y verificación de competencia en tiempo real. La app opera en entornos donde la autenticidad de la ubicación del usuario es crítica para el negocio. \n
Mi rol fue mobile developer en un equipo de dos personas. Me encargué del login, la migración de la base de datos de Kotlin a Expo SQLite y la migración de pantallas del stack nativo a React Native con Expo. El reto técnico más significativo fue implementar detección de aplicaciones de GPS falso en tiempo real — una restricción de seguridad que el cliente exigía pero que Expo no soportaba de forma nativa en ese momento.\n
Descartar Expo en favor de React Native estándar no era una opción que el cliente aprobara, por lo que investigué en la documentación oficial y encontré que era posible crear un módulo npm que expusiera código Java nativo desde TypeScript sin eyectar Expo. Diseñé, desarrollé y publiqué ese paquete — que permitió detectar y bloquear apps de terceros que alteraran la geolocalización del dispositivo, preservando la integridad de los check-in y check-out. El cliente solicitó conservar el paquete con documentación técnica, lo que habla del impacto que tuvo. La app supera las 100 descargas en Google Play.`,
  },
  tracker: {
    title: "Aplicación de seguimiento de gastos",
    images: [
      "public/TrackerApp/tracker1.png",
      "public/TrackerApp/tracker2.png",
      "public/TrackerApp/tracker3.png",
      "public/TrackerApp/tracker4.png",
      "public/TrackerApp/tracker5.png",
      "public/TrackerApp/tracker6.png",
    ],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. 
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
    deserunt mollit anim id est laborum. Pellentesque habitant morbi tristique 
    senectus et netus et malesuada fames ac turpis egestas.`,
  },
};

let currentImages = [];
let currentIndex = 0;

const modalOverlay = document.getElementById("modal-overlay");
const modalBox = document.getElementById("modal-box");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-description");
const dotsWrapper = document.getElementById("gallery-dots");

document.querySelectorAll(".btn-gallery").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const key = btn.dataset.project;
    const project = projects[key];

    currentImages = project.images;
    currentIndex = 0;
    modalTitle.textContent = project.title;
    modalDesc.textContent = project.description;
    modalImg.src = currentImages[0];

    buildDots();

    const rect = btn.closest(".project-card").getBoundingClientRect();
    const originX =
      (((rect.left + rect.width / 2) / window.innerWidth) * 100).toFixed(1) +
      "%";
    const originY =
      (((rect.top + rect.height / 2) / window.innerHeight) * 100).toFixed(1) +
      "%";
    modalBox.style.setProperty("--origin-x", originX);
    modalBox.style.setProperty("--origin-y", originY);

    modalOverlay.style.display = "flex";
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        modalOverlay.classList.add("open");
        modalBox.classList.add("expanded");
      });
    });
  });
});

function closeModal() {
  modalBox.classList.remove("expanded");
  modalOverlay.classList.remove("open");

  modalBox.addEventListener(
    "transitionend",
    () => {
      modalOverlay.style.display = "none";
    },
    { once: true },
  );
}

document.getElementById("modal-close").addEventListener("click", closeModal);
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

function goTo(index) {
  currentIndex = (index + currentImages.length) % currentImages.length;
  modalImg.style.opacity = "0";
  setTimeout(() => {
    modalImg.src = currentImages[currentIndex];
    modalImg.style.opacity = "1";
    updateDots();
  }, 300);
}

document
  .getElementById("arrow-prev")
  .addEventListener("click", () => goTo(currentIndex - 1));
document
  .getElementById("arrow-next")
  .addEventListener("click", () => goTo(currentIndex + 1));

function buildDots() {
  dotsWrapper.innerHTML = "";
  currentImages.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.classList.add("gallery-dot");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goTo(i));
    dotsWrapper.appendChild(dot);
  });
}

function updateDots() {
  document.querySelectorAll(".gallery-dot").forEach((d, i) => {
    d.classList.toggle("active", i === currentIndex);
  });
}
