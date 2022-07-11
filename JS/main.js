// window.sr = ScrollReveal();

// sr.reveal('.nav-menu', {
//     duration: 2000,
//     origin: 'bottom',
//     distance: '-100px'
// });

// sr.reveal('.img-user', {
//     duration: 3000,
// });

// sr.reveal('.img2', {
//     duration: 2000,
//     origin: 'bottom',
//     distance: '400px'
// });

// sr.reveal('.descripction', {
//     duration: 2000,
//     origin: 'bottom',
//     distance: '400px'
// });

// sr.reveal('.cv', {
//     duration: 2000,
//     origin: 'bottom',
//     distance: '400px'
// });

const toggleButton = document.getElementById("button-menu");
const navWrapper = document.getElementById("nav");

toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("close");
  navWrapper.classList.toggle("show");
});

navWrapper.addEventListener("click", (e) => {
  if (e.target.id === "nav") {
    navWrapper.classList.remove("show");
    toggleButton.classList.remove("close");
  }
});
