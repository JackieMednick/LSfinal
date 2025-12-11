const buttons = document.querySelectorAll(".nav-button");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {

        document.body.style.opacity = "0";

        setTimeout(() => {
            window.location.href = btn.getAttribute("data-link");
        }, 600);
    });
});

const smallImg = document.querySelector(".top-right-img");
const overlay = document.getElementById("img-overlay");

smallImg.addEventListener("click", () => {
    overlay.style.display = "flex";
});

overlay.addEventListener("click", () => {
    overlay.style.display = "none";
});

document.addEventListener("DOMContentLoaded", () => {
    const sound = document.getElementById("pageSound");

    if (sound) {
        sound.volume = 0.8;
        sound.play().catch(() => {
            console.log("Autoplay blocked by browser. Will play on first click.");
        });
    }
});
document.addEventListener("click", () => {
    const sound = document.getElementById("pageSound");
    if (sound && sound.paused) {
        sound.play();
    }
}, { once: true });

