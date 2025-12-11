const buttons = document.querySelectorAll(".nav-button");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {

        document.body.style.opacity = "0";

        setTimeout(() => {
            window.location.href = btn.getAttribute("data-link");
        }, 600);
    });
});

document.querySelectorAll(".nav-button").forEach(btn => {
    btn.addEventListener("click", () => {
        window.location.href = btn.getAttribute("data-link");
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
