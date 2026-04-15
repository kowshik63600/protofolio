// MENU
function toggleMenu() {
    document.getElementById("menu").classList.toggle("show");
}

// TYPING EFFECT
const texts = ["Frontend Developer", "React Developer"];
let i = 0,
    j = 0,
    isDeleting = false;

function type() {
    let element = document.getElementById("typing");
    let word = texts[i];

    element.textContent = word.substring(0, j);

    if (!isDeleting) j++;
    else j--;

    if (j === word.length) isDeleting = true;
    if (j === 0 && isDeleting) {
        isDeleting = false;
        i = (i + 1) % texts.length;
    }

    setTimeout(type, 100);
}

type();

// SMOOTH SCROLL
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// SCROLL REVEAL
function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
// ACTIVE NAV LINK ON SCROLL
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});
// SCROLL PROGRESS BAR
window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const scrolled = (scrollTop / height) * 100;

    document.getElementById("progress-bar").style.width = scrolled + "%";
});
const toggleBtn = document.getElementById("theme-toggle");

// load saved mode
if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
    toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        toggleBtn.textContent = "☀️";
        localStorage.setItem("theme", "light");
    } else {
        toggleBtn.textContent = "🌙";
        localStorage.setItem("theme", "dark");
    }
});
// MODAL FUNCTION
const modal = document.getElementById("project-modal");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const modalLink = document.getElementById("modal-link");
const closeBtn = document.querySelector(".close-btn");

document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => {
        modal.style.display = "block";

        modalTitle.textContent = card.dataset.title;
        modalDesc.textContent = card.dataset.desc;
        modalLink.href = card.dataset.link;
    });
});

// CLOSE
closeBtn.onclick = () => modal.style.display = "none";

window.onclick = (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
};
// CURSOR MOVE
const cursor = document.querySelector(".cursor");
const dot = document.querySelector(".cursor-dot");

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

    dot.style.left = e.clientX + "px";
    dot.style.top = e.clientY + "px";
});
document.querySelectorAll("a, button, .project-card").forEach(el => {
    el.addEventListener("mouseenter", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(1.5)";
    });

    el.addEventListener("mouseleave", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(1)";
    });
});
// LOADER HIDE
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.transition = "0.5s";

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    }, 1000); // delay (you can reduce)
});