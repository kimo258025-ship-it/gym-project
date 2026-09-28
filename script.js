/* =========================================================
   IRONCORE FITNESS
   JAVASCRIPT
========================================================= */


/* =========================================================
   PRELOADER
========================================================= */

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    setTimeout(() => {

        preloader.classList.add("hide");

    }, 900);

});


/* =========================================================
   HEADER SCROLL
========================================================= */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


/* =========================================================
   MOBILE MENU
========================================================= */

const menuToggle =
    document.getElementById("menuToggle");

const navbar =
    document.getElementById("navbar");


menuToggle.addEventListener("click", () => {

    navbar.classList.toggle("open");

    menuToggle.classList.toggle("open");

});


document
    .querySelectorAll(".nav-link")
    .forEach(link => {

        link.addEventListener("click", () => {

            navbar.classList.remove("open");

            menuToggle.classList.remove("open");

        });

    });


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-link");


function updateActiveLink() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionBottom =
            sectionTop + section.offsetHeight;

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
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveLink
);


/* =========================================================
   COUNTER ANIMATION
========================================================= */

const counters =
    document.querySelectorAll(".counter");

let countersStarted = false;


function startCounters() {

    if (countersStarted) return;

    countersStarted = true;


    counters.forEach(counter => {

        const target =
            Number(counter.dataset.target);

        let current = 0;

        const increment =
            Math.max(1, Math.ceil(target / 80));


        const updateCounter = () => {

            current += increment;

            if (current >= target) {

                current = target;

                counter.textContent =
                    current.toLocaleString();

                return;

            }

            counter.textContent =
                current.toLocaleString();

            requestAnimationFrame(
                updateCounter
            );

        };


        updateCounter();

    });

}


const statsSection =
    document.querySelector(".stats-section");


const statsObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    startCounters();

                }

            });

        },
        {
            threshold: .4
        }
    );


statsObserver.observe(statsSection);


/* =========================================================
   REVEAL ANIMATION
========================================================= */

const revealElements = document.querySelectorAll(
    ".program-card, .feature-item, .trainer-card, .price-card, .gallery-item, .faq-item"
);


revealElements.forEach(element => {

    element.classList.add("reveal");

});


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
            threshold: .1
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================================
   FAQ ACCORDION
========================================================= */

const faqItems =
    document.querySelectorAll(".faq-item");


faqItems.forEach(item => {

    const question =
        item.querySelector(".faq-question");

    const answer =
        item.querySelector(".faq-answer");


    question.addEventListener("click", () => {

        const isOpen =
            item.classList.contains("open");


        faqItems.forEach(otherItem => {

            otherItem.classList.remove("open");

            otherItem.querySelector(
                ".faq-answer"
            ).style.maxHeight = null;

        });


        if (!isOpen) {

            item.classList.add("open");

            answer.style.maxHeight =
                answer.scrollHeight + "px";

        }

    });

});


/* =========================================================
   TESTIMONIAL SLIDER
========================================================= */

const testimonials =
    document.querySelectorAll(".testimonial");

const dots =
    document.querySelectorAll(".dot");

const nextButton =
    document.getElementById("nextTestimonial");

const prevButton =
    document.getElementById("prevTestimonial");

let testimonialIndex = 0;


function showTestimonial(index) {

    testimonials.forEach(item => {

        item.classList.remove("active");

    });


    dots.forEach(dot => {

        dot.classList.remove("active");

    });


    testimonials[index]
        .classList.add("active");

    dots[index]
        .classList.add("active");

}


nextButton.addEventListener("click", () => {

    testimonialIndex++;

    if (
        testimonialIndex >=
        testimonials.length
    ) {

        testimonialIndex = 0;

    }

    showTestimonial(testimonialIndex);

});


prevButton.addEventListener("click", () => {

    testimonialIndex--;

    if (testimonialIndex < 0) {

        testimonialIndex =
            testimonials.length - 1;

    }

    showTestimonial(testimonialIndex);

});


dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        testimonialIndex = index;

        showTestimonial(testimonialIndex);

    });

});


/* =========================================================
   SCHEDULE TABS
========================================================= */

const dayButtons =
    document.querySelectorAll(".day-btn");

const scheduleList =
    document.getElementById("scheduleList");


const schedules = {

    monday: [
        ["07:00", "STRENGTH", "POWER BUILD", "ALEX MORGAN", "ADVANCED"],
        ["10:00", "CONDITIONING", "HIIT PROTOCOL", "MAYA CARTER", "ALL LEVELS"],
        ["06:00", "PERFORMANCE", "ATHLETE LAB", "DANIEL REED", "INTERMEDIATE"],
        ["08:00", "COMBAT", "FIGHT LAB", "ALEX MORGAN", "ALL LEVELS"]
    ],

    tuesday: [
        ["06:30", "STRENGTH", "LOWER BODY", "ALEX MORGAN", "ALL LEVELS"],
        ["09:00", "MOBILITY", "MOBILITY FLOW", "MAYA CARTER", "ALL LEVELS"],
        ["05:00", "CONDITIONING", "ENGINE ROOM", "DANIEL REED", "INTERMEDIATE"],
        ["07:30", "STRENGTH", "POWER BUILD", "ALEX MORGAN", "ADVANCED"]
    ],

    wednesday: [
        ["07:00", "PERFORMANCE", "ATHLETE LAB", "DANIEL REED", "INTERMEDIATE"],
        ["10:00", "STRENGTH", "UPPER BODY", "ALEX MORGAN", "ALL LEVELS"],
        ["06:00", "CONDITIONING", "HIIT PROTOCOL", "MAYA CARTER", "ALL LEVELS"],
        ["08:00", "COMBAT", "FIGHT LAB", "ALEX MORGAN", "ALL LEVELS"]
    ],

    thursday: [
        ["06:30", "MOBILITY", "MOBILITY FLOW", "MAYA CARTER", "ALL LEVELS"],
        ["09:00", "STRENGTH", "POWER BUILD", "ALEX MORGAN", "ADVANCED"],
        ["06:00", "PERFORMANCE", "ATHLETE LAB", "DANIEL REED", "INTERMEDIATE"],
        ["08:00", "CONDITIONING", "ENGINE ROOM", "MAYA CARTER", "ALL LEVELS"]
    ],

    friday: [
        ["07:00", "STRENGTH", "FULL BODY", "ALEX MORGAN", "ALL LEVELS"],
        ["10:00", "CONDITIONING", "HIIT PROTOCOL", "MAYA CARTER", "ALL LEVELS"],
        ["06:00", "COMBAT", "FIGHT LAB", "ALEX MORGAN", "ALL LEVELS"],
        ["08:00", "PERFORMANCE", "ATHLETE LAB", "DANIEL REED", "ADVANCED"]
    ],

    saturday: [
        ["08:00", "STRENGTH", "POWER BUILD", "ALEX MORGAN", "ALL LEVELS"],
        ["10:00", "MOBILITY", "MOBILITY FLOW", "MAYA CARTER", "ALL LEVELS"],
        ["12:00", "CONDITIONING", "ENGINE ROOM", "MAYA CARTER", "INTERMEDIATE"],
        ["05:00", "COMBAT", "FIGHT LAB", "ALEX MORGAN", "ALL LEVELS"]
    ]

};


function renderSchedule(day) {

    const classes =
        schedules[day];

    scheduleList.innerHTML = "";


    classes.forEach(item => {

        const row =
            document.createElement("div");

        row.className = "class-row";


        row.innerHTML = `

            <div class="class-time">
                ${item[0]}
                <small>
                    ${item[0].includes("PM") ? "PM" : "AM"}
                </small>
            </div>

            <div class="class-name">
                <span>${item[1]}</span>
                <strong>${item[2]}</strong>
            </div>

            <div class="class-trainer">
                ${item[3]}
            </div>

            <div class="class-level">
                ${item[4]}
            </div>

            <a
                href="#contact"
                class="class-arrow"
            >
                →
            </a>

        `;


        scheduleList.appendChild(row);

    });

}


dayButtons.forEach(button => {

    button.addEventListener("click", () => {

        dayButtons.forEach(btn => {
            btn.classList.remove("active");
        });


        button.classList.add("active");


        const day =
            button.dataset.day;


        renderSchedule(day);

    });

});


/* =========================================================
   REAL CONTACT / REGISTRATION FORM
========================================================= */

const contactForm =
    document.getElementById("contactForm");

const formSuccess =
    document.getElementById("formSuccess");


contactForm.addEventListener("submit", async event => {

    event.preventDefault();

    const submitButton =
        contactForm.querySelector(
            'button[type="submit"]'
        );

    const originalButtonText =
        submitButton.innerHTML;

    submitButton.disabled = true;
    submitButton.innerHTML = "SENDING...";

    formSuccess.textContent = "";


    const formData =
        new FormData(contactForm);


    try {

        const response =
            await fetch(
                "https://formsubmit.co/ajax/kimo86652@gmail.com",
                {
                    method: "POST",
                    body: formData,
                    headers: {
                        Accept: "application/json"
                    }
                }
            );


        const result =
            await response.json();


        if (
            !response.ok ||
            result.success === false
        ) {

            throw new Error(
                "Submission failed"
            );

        }


        formSuccess.textContent =
            "✓ Registration received. Our team will contact you shortly.";

        contactForm.reset();


    } catch (error) {

        console.error(
            "Form submission error:",
            error
        );

        formSuccess.textContent =
            "✕ Something went wrong. Please try again.";

    } finally {

        submitButton.disabled = false;

        submitButton.innerHTML =
            originalButtonText;


        setTimeout(() => {

            formSuccess.textContent = "";

        }, 7000);

    }

});


/* =========================================================
   BACK TO TOP
========================================================= */

const backTop =
    document.getElementById("backTop");


window.addEventListener("scroll", () => {

    if (window.scrollY > 700) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

});


backTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================================================
   PARALLAX HERO
========================================================= */

const heroBg =
    document.querySelector(".hero-bg");


window.addEventListener("scroll", () => {

    if (!heroBg) return;

    const scroll =
        window.scrollY;

    if (scroll < window.innerHeight) {

        heroBg.style.transform =
            `translateY(${scroll * .15}px) scale(1.03)`;

    }

});


/* =========================================================
   BUTTON HOVER
========================================================= */

const buttons =
    document.querySelectorAll(".btn");


buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transition =
            "transform .25s ease";

    });

});


/* =========================================================
   PREVENT HASH JUMP GLITCH
========================================================= */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(anchor => {

        anchor.addEventListener(
            "click",
            function (event) {

                const target =
                    document.querySelector(
                        this.getAttribute("href")
                    );

                if (!target) return;

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }
        );

    });
