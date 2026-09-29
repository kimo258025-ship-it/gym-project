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


/* CLOSE MENU */

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

                <span>
                    ${item[1]}
                </span>

                <strong>
                    ${item[2]}
                </strong>

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
   SUPABASE CONFIGURATION
========================================================= */

const SUPABASE_URL =
    "https://gvdtixjvxvzjncqcntln.supabase.co";

const SUPABASE_ANON_KEY =
    "sb_publishable_8oJb4HzEplJgeym5axBidQ_3wv9RKVN";

const SUPABASE_READY =
    SUPABASE_URL !== "YOUR_SUPABASE_URL" &&
    SUPABASE_ANON_KEY !== "YOUR_SUPABASE_ANON_KEY";

const supabaseClient =
    SUPABASE_READY
        ? window.supabase.createClient(
            SUPABASE_URL,
            SUPABASE_ANON_KEY
        )
        : null;



/* =========================================================
   CONTACT FORM
========================================================= */

const contactForm =
    document.getElementById("contactForm");

const formSuccess =
    document.getElementById("formSuccess");


contactForm?.addEventListener(
    "submit",
    async event => {

        event.preventDefault();

        const submitButton =
            contactForm.querySelector(
                'button[type="submit"]'
            );

        const originalButtonText =
            submitButton.innerHTML;


        submitButton.disabled = true;

        submitButton.innerHTML =
            "SENDING...";

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
                            Accept:
                                "application/json"
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

    }
);



/* =========================================================
   REAL MEMBERSHIP SYSTEM
========================================================= */

const memberModal =
    document.getElementById("memberModal");

const authView =
    document.getElementById("authView");

const memberView =
    document.getElementById("memberView");

const authForm =
    document.getElementById("authForm");

const authTitle =
    document.getElementById("authTitle");

const authSubtitle =
    document.getElementById("authSubtitle");

const authName =
    document.getElementById("authName");

const authEmail =
    document.getElementById("authEmail");

const authPassword =
    document.getElementById("authPassword");

const authSubmit =
    document.getElementById("authSubmit");

const authMessage =
    document.getElementById("authMessage");

const fullNameGroup =
    document.getElementById("fullNameGroup");

const signupTab =
    document.getElementById("signupTab");

const loginTab =
    document.getElementById("loginTab");

const memberAccountBtn =
    document.getElementById("memberAccountBtn");

const dashboardChoosePlan =
    document.getElementById("dashboardChoosePlan");

const logoutBtn =
    document.getElementById("logoutBtn");


let authMode = "signup";

let selectedPlan = null;

let currentUser = null;



function setMemberMessage(
    element,
    message,
    error = false
) {

    if (!element) return;

    element.textContent =
        message;

    element.style.color =
        error
            ? "#ff6b6b"
            : "#bdbdbd";

}



function openMemberModal(
    view = "auth"
) {

    if (!memberModal) return;

    memberModal.classList.add("open");

    memberModal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.style.overflow =
        "hidden";


    view === "dashboard" &&
    currentUser
        ? showDashboard()
        : showAuth();

}



function closeMemberModal() {

    if (!memberModal) return;

    memberModal.classList.remove(
        "open"
    );

    memberModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow =
        "";

}



function showAuth() {

    authView.hidden = false;

    memberView.hidden = true;

    updateAuthMode();

}



function showDashboard() {

    authView.hidden = true;

    memberView.hidden = false;

    loadMemberDashboard();

}



function updateAuthMode() {

    const signup =
        authMode === "signup";


    authTitle.textContent =
        signup
            ? "CREATE YOUR ACCOUNT."
            : "WELCOME BACK.";


    authSubtitle.textContent =
        signup
            ? "Create an account to choose a membership plan and manage your membership."
            : "Log in to view and manage your IRONCORE membership.";


    signupTab.classList.toggle(
        "active",
        signup
    );


    loginTab.classList.toggle(
        "active",
        !signup
    );


    fullNameGroup.hidden =
        !signup;


    authName.required =
        signup;


    authPassword.autocomplete =
        signup
            ? "new-password"
            : "current-password";


    authSubmit.textContent =
        signup
            ? "CREATE ACCOUNT"
            : "LOG IN";


    setMemberMessage(
        authMessage,
        ""
    );

}



function ensureSupabase() {

    if (
        SUPABASE_READY &&
        supabaseClient
    ) {

        return true;

    }


    setMemberMessage(
        authMessage,
        "Supabase is not configured yet. Add your project URL and anon key in script.js.",
        true
    );


    return false;

}



signupTab?.addEventListener(
    "click",
    () => {

        authMode = "signup";

        updateAuthMode();

    }
);


loginTab?.addEventListener(
    "click",
    () => {

        authMode = "login";

        updateAuthMode();

    }
);


memberAccountBtn?.addEventListener(
    "click",
    () => {

        openMemberModal(
            currentUser
                ? "dashboard"
                : "auth"
        );

    }
);


document
    .querySelectorAll(
        "[data-close-member]"
    )
    .forEach(el => {

        el.addEventListener(
            "click",
            closeMemberModal
        );

    });


document.addEventListener(
    "keydown",
    e => {

        if (e.key === "Escape") {

            closeMemberModal();

        }

    }
);



document
    .querySelectorAll(".plan-btn")
    .forEach(button => {

        button.addEventListener(
            "click",
            async event => {

                event.preventDefault();


                selectedPlan = {
                    name:
                        button.dataset.plan,

                    price:
                        Number(
                            button.dataset.price
                        )
                };


                if (!currentUser) {

                    authMode = "signup";

                    openMemberModal(
                        "auth"
                    );


                    setMemberMessage(
                        authMessage,
                        `Create your account to continue with the ${selectedPlan.name} plan.`
                    );


                    return;

                }


                openMemberModal(
                    "dashboard"
                );


                await saveMembership(
                    selectedPlan.name,
                    selectedPlan.price
                );

            }
        );

    });



authForm?.addEventListener(
    "submit",
    async event => {

        event.preventDefault();


        if (!ensureSupabase()) return;


        const email =
            authEmail.value.trim();

        const password =
            authPassword.value;


        authSubmit.disabled =
            true;


        authSubmit.textContent =
            authMode === "signup"
                ? "CREATING..."
                : "LOGGING IN...";


        setMemberMessage(
            authMessage,
            ""
        );


        try {

            if (
                authMode === "signup"
            ) {

                const name =
                    authName.value.trim();


                const {
                    data,
                    error
                } =
                    await supabaseClient.auth.signUp({

                        email,

                        password,

                        options: {
                            data: {
                                full_name:
                                    name
                            }
                        }

                    });


                if (error) {

                    throw error;

                }


                currentUser =
                    data.user;


                if (data.session) {

                    await upsertProfile(
                        data.user,
                        name
                    );


                    if (
                        selectedPlan
                    ) {

                        await saveMembership(
                            selectedPlan.name,
                            selectedPlan.price
                        );

                    }


                   showDashboard();


                } else {

                    setMemberMessage(
                        authMessage,
                        "Account created. Check your email to confirm your account, then log in."
                    );


                    authMode =
                        "login";


                    updateAuthMode();

                }


            } else {

                const {
                    data,
                    error
                } =
                    await supabaseClient.auth.signInWithPassword({
                        email,
                        password
                    });


                if (error) {

                    throw error;

                }


                currentUser =
                    data.user;


                await upsertProfile(
                    data.user
                );


                if (
                    selectedPlan
                ) {

                    await saveMembership(
                        selectedPlan.name,
                        selectedPlan.price
                    );

                }


                window.location.href = "member-dashboard.html";

            }


        } catch (error) {

            console.error(error);


            setMemberMessage(
                authMessage,
                error.message ||
                    "Authentication failed.",
                true
            );


        } finally {

            authSubmit.disabled =
                false;


            authSubmit.textContent =
                authMode === "signup"
                    ? "CREATE ACCOUNT"
                    : "LOG IN";

        }

    }
);



async function upsertProfile(
    user,
    name = null
) {

    const fullName =
        name ||
        user.user_metadata?.full_name ||
        "Member";


    const { error } =
        await supabaseClient
            .from("profiles")
            .upsert(
                {
                    id:
                        user.id,

                    full_name:
                        fullName,

                    email:
                        user.email
                },
                {
                    onConflict:
                        "id"
                }
            );


    if (error) {

        throw error;

    }

}



async function saveMembership(
    planName,
    price
) {

    if (!currentUser) return;


    const startDate =
        new Date();


    const endDate =
        new Date(
            startDate
        );


    endDate.setMonth(
        endDate.getMonth() + 1
    );


    const { error } =
        await supabaseClient
            .from("memberships")
            .upsert(
                {
                    user_id:
                        currentUser.id,

                    plan:
                        planName,

                    price:
                        price,

                    status:
                        "pending",

                    start_date:
                        startDate
                            .toISOString()
                            .slice(0, 10),

                    end_date:
                        endDate
                            .toISOString()
                            .slice(0, 10)
                },
                {
                    onConflict:
                        "user_id"
                }
            );


    if (error) {

        setMemberMessage(
            document.getElementById(
                "dashboardMessage"
            ),
            error.message,
            true
        );

        return;

    }


    selectedPlan = null;


    setMemberMessage(
        document.getElementById(
            "dashboardMessage"
        ),
        `Your ${planName} membership request has been saved. An administrator can activate it after confirmation/payment.`
    );


    await loadMemberDashboard();

}



async function loadMemberDashboard() {

    if (
        !currentUser ||
        !supabaseClient
    ) {

        return;

    }


    const name =
        currentUser.user_metadata?.full_name ||
        "Member";


    document.getElementById(
        "memberName"
    ).textContent =
        name.toUpperCase();


    document.getElementById(
        "memberEmail"
    ).textContent =
        currentUser.email || "";


    const {
        data,
        error
    } =
        await supabaseClient
            .from("memberships")
            .select(
                "plan, price, status, start_date, end_date"
            )
            .eq(
                "user_id",
                currentUser.id
            )
            .maybeSingle();


    if (error) {

        setMemberMessage(
            document.getElementById(
                "dashboardMessage"
            ),
            error.message,
            true
        );

        return;

    }


    document.getElementById(
        "memberPlan"
    ).textContent =
        data?.plan ||
        "No plan";


    document.getElementById(
        "memberStatus"
    ).textContent =
        data?.status ||
        "Not active";


    document.getElementById(
        "memberStart"
    ).textContent =
        data?.start_date ||
        "—";


    document.getElementById(
        "memberEnd"
    ).textContent =
        data?.end_date ||
        "—";

}



dashboardChoosePlan?.addEventListener(
    "click",
    () => {

        closeMemberModal();


        document
            .getElementById(
                "membership"
            )
            ?.scrollIntoView({
                behavior:
                    "smooth"
            });

    }
);



logoutBtn?.addEventListener(
    "click",
    async () => {

        if (!supabaseClient) return;


        const { error } =
            await supabaseClient.auth.signOut();


        if (error) {

            setMemberMessage(
                document.getElementById(
                    "dashboardMessage"
                ),
                error.message,
                true
            );

            return;

        }


        currentUser = null;

        closeMemberModal();

    }
);



async function initializeMembership() {

    if (!SUPABASE_READY) return;


    const {
        data: {
            session
        }
    } =
        await supabaseClient.auth.getSession();


    currentUser =
        session?.user ||
        null;


    supabaseClient.auth.onAuthStateChange(
        (
            _event,
            sessionState
        ) => {

            currentUser =
                sessionState?.user ||
                null;


            if (
                !currentUser &&
                memberModal?.classList.contains(
                    "open"
                )
            ) {

                showAuth();

            }

        }
    );

}


initializeMembership();



/* =========================================================
   BACK TO TOP
========================================================= */

const backTop =
    document.getElementById("backTop");


window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 700) {

            backTop.classList.add(
                "show"
            );

        } else {

            backTop.classList.remove(
                "show"
            );

        }

    }
);



backTop.addEventListener(
    "click",
    () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);



/* =========================================================
   PARALLAX HERO
========================================================= */

const heroBg =
    document.querySelector(
        ".hero-bg"
    );


window.addEventListener(
    "scroll",
    () => {

        if (!heroBg) return;


        const scroll =
            window.scrollY;


        if (
            scroll <
            window.innerHeight
        ) {

            heroBg.style.transform =
                `translateY(${scroll * .15}px) scale(1.03)`;

        }

    }
);



/* =========================================================
   BUTTON HOVER SOUND-LIKE FEEDBACK
========================================================= */

const buttons =
    document.querySelectorAll(
        ".btn"
    );


buttons.forEach(button => {

    button.addEventListener(
        "mouseenter",
        () => {

            button.style.transition =
                "transform .25s ease";

        }
    );

});



/* =========================================================
   PREVENT HASH JUMP GLITCH
========================================================= */

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(anchor => {

        anchor.addEventListener(
            "click",
            function (event) {

                const target =
                    document.querySelector(
                        this.getAttribute(
                            "href"
                        )
                    );


                if (!target) return;


                event.preventDefault();


                target.scrollIntoView({
                    behavior:
                        "smooth"
                });

            }
        );

    });
