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
    document.body.style.overflow = "auto";

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

      profileImg.src = "img/profile-picture.jpeg";
      profileImg.onload = () => {
        profileImg.classList.add("visible");
        floatingCircle.style.backgroundColor = "transparent";
      };

      setTimeout(() => {
        heroText.classList.add("visible");
      }, 700);
    }, 150);
  }, 1200);
}, 2000);
