const buttons = document.querySelectorAll(".nav-button");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        // Start fade-out
        document.body.style.opacity = "0";

        // Wait for fade-out to finish, then navigate
        setTimeout(() => {
            window.location.href = btn.getAttribute("data-link");
        }, 600); // matches the CSS transition
    });
});