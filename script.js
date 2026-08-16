/* =========================================================
   PORTFOLIO JAVASCRIPT
   ========================================================= */


/* =========================================================
   MOBILE MENU
   ========================================================= */

const menuButton = document.getElementById("menuButton");

const sidebar = document.getElementById("sidebar");


menuButton.addEventListener("click", function () {

    sidebar.classList.toggle("open");

});



/* =========================================================
   CLOSE MOBILE MENU AFTER CLICKING LINK
   ========================================================= */

const navigationLinks = document.querySelectorAll(".tab");


navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        sidebar.classList.remove("open");

    });

});



/* =========================================================
   ACTIVE NAVIGATION
   ========================================================= */

const sections = document.querySelectorAll("main section");


window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop;

        const sectionHeight = section.offsetHeight;


        if (
            window.scrollY >=
            sectionTop - sectionHeight / 3
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navigationLinks.forEach(function (link) {

        link.classList.remove("active");


        const target = link.getAttribute("href");


        if (target === "#" + currentSection) {

            link.classList.add("active");

        }

    });

});



/* =========================================================
   CLOSE MENU WHEN CLICKING OUTSIDE
   ========================================================= */

document.addEventListener("click", function (event) {

    const clickedMenu =
        menuButton.contains(event.target);

    const clickedSidebar =
        sidebar.contains(event.target);


    if (!clickedMenu && !clickedSidebar) {

        sidebar.classList.remove("open");

    }

});