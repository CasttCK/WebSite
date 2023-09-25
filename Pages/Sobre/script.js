window.addEventListener("scroll", function() {
    const header = document.getElementById("header");
    const scrollPosition = window.scrollY;
    const triggerHeight = 100;

    if (scrollPosition > triggerHeight) {
    header.style.backgroundColor = "#272727";
    } else {
    header.style.backgroundColor = "rgba(39, 39, 39, 0.521)";
    }
});