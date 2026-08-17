/* =========================================
   MOBILE MENU
========================================= */

const menuButton =
    document.getElementById("menuButton");

const navMenu =
    document.getElementById("navMenu");


if (menuButton && navMenu) {

    menuButton.addEventListener("click", () => {

        navMenu.classList.toggle("open");

        if (navMenu.classList.contains("open")) {

            menuButton.textContent = "✕";

        } else {

            menuButton.textContent = "☰";

        }

    });


    const mobileLinks =
        navMenu.querySelectorAll(".nav-link");


    mobileLinks.forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("open");

            menuButton.textContent = "☰";

        });

    });

}


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-link");


function updateActiveNavigation() {

    let currentSection = "home";


    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 180;

        const sectionBottom =
            sectionTop +
            section.offsetHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionBottom
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);

updateActiveNavigation();


/* =========================================
   CURSOR GLOW
========================================= */

const cursorGlow =
    document.querySelector(".cursor-glow");


if (cursorGlow) {

    window.addEventListener(
        "mousemove",
        event => {

            cursorGlow.style.left =
                event.clientX + "px";

            cursorGlow.style.top =
                event.clientY + "px";

        }
    );

}


/* =========================================
   CURRENT YEAR
========================================= */

const year =
    document.getElementById("year");


if (year) {

    year.textContent =
        new Date().getFullYear();

}


/* =========================================
   CARD HOVER
========================================= */

const cards =
    document.querySelectorAll(
        ".service-card, .project-card, .contact-card"
    );


cards.forEach(card => {

    card.addEventListener(
        "mouseenter",
        () => {

            card.style.transition =
                "transform .3s ease, border .3s ease, box-shadow .3s ease";

        }
    );

});


/* =========================================
   SMOOTH ANCHOR
========================================= */

document.querySelectorAll('a[href^="#"]')
    .forEach(link => {

        link.addEventListener("click", event => {

            const targetId =
                link.getAttribute("href");

            const target =
                document.querySelector(targetId);

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });