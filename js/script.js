document.addEventListener("DOMContentLoaded", () => {
    console.log("Sitio cargado correctamente");

    const enlaces = document.querySelectorAll("nav a");

    enlaces.forEach(enlace => {
        enlace.addEventListener("mouseover", () => {
            enlace.style.opacity = "0.5";
        });

        enlace.addEventListener("mouseout", () => {
            enlace.style.opacity = "1";
        });
    });
});