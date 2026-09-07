// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("open");

    if (navbar.classList.contains("open")) {
        menuBtn.textContent = "×";
    } else {
        menuBtn.textContent = "☰";
    }
});


// Close mobile menu after clicking a link

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("open");
        menuBtn.textContent = "☰";

    });

});


// ================= ACTIVE NAV =================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// ================= SCROLL REVEAL =================

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                revealObserver.unobserve(entry.target);

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


// ================= PRICING MODAL =================

const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
const modalText = document.getElementById("modalText");
const modalJoin = document.getElementById("modalJoin");

const priceButtons = document.querySelectorAll(".price-btn");

priceButtons.forEach(button => {

    button.addEventListener("click", () => {

        const plan = button.dataset.plan;

        modalText.textContent =
            `You've selected the ${plan} membership. Fill out the contact form to continue your registration.`;

        modal.classList.add("show");

    });

});


closeModal.addEventListener("click", () => {
    modal.classList.remove("show");
});


modal.addEventListener("click", event => {

    if (event.target === modal) {
        modal.classList.remove("show");
    }

});


modalJoin.addEventListener("click", () => {
    modal.classList.remove("show");
});


// ================= CONTACT FORM =================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", event => {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const membership = document.getElementById("membership").value;
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !membership || !message) {

        formMessage.textContent =
            "Please complete all fields before sending.";

        formMessage.style.color = "#ff6b6b";

        return;
    }


    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        formMessage.textContent =
            "Please enter a valid email address.";

        formMessage.style.color = "#ff6b6b";

        return;
    }


    formMessage.textContent =
        `Thanks ${name}! Your ${membership} membership request has been received.`;

    formMessage.style.color = "#00ff88";

    contactForm.reset();

});


// ================= ESC KEY =================

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        modal.classList.remove("show");
        navbar.classList.remove("open");

        menuBtn.textContent = "☰";

    }

});


// ================= HEADER EFFECT =================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background =
            "rgba(7, 10, 12, 0.96)";

    } else {

        header.style.background =
            "rgba(12, 15, 18, 0.82)";

    }

});