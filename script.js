document.addEventListener("DOMContentLoaded", () => {


    const buttons = document.querySelectorAll(".nav-button");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            document.body.style.opacity = "0";
            setTimeout(() => {
                window.location.href = btn.getAttribute("data-link");
            }, 600);
        });
    });

/* OVERLAY STUFF*/
const clickableImages = document.querySelectorAll(".top-right-img, .top-middle-img");
const overlay = document.getElementById("img-overlay");
const overlayImg = document.getElementById("overlay-img");

clickableImages.forEach(img => {
    img.addEventListener("click", () => {
        const fullImage = img.getAttribute("data-full") || img.src;
        overlayImg.src = fullImage;
        overlay.style.display = "flex";
    });
});

overlay.addEventListener("click", () => {
    overlay.style.display = "none";
});

    const sound = document.getElementById("pageSound");

    if (sound) {
        sound.volume = 0.8;
        sound.play().catch(() => {
            console.log("Autoplay blocked by browser.");
        });
    }

    document.addEventListener("click", () => {
        if (sound && sound.paused) {
            sound.play();
        }
    }, { once: true });

});
