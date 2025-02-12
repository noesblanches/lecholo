/* Language Toggle Script (assets/script.js) */
document.addEventListener("DOMContentLoaded", function () {
    const langToggle = document.getElementById("lang-toggle");
    if (langToggle) {
        langToggle.addEventListener("click", function () {
            const currentLang = document.documentElement.lang;
            if (currentLang === "fr") {
                window.location.href = "../en/index.html";
            } else {
                window.location.href = "../fr/index.html";
            }
        });
    }
});