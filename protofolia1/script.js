document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const texts = ["Web Developer", "Python Developer"];
let i = 0,
    j = 0,
    del = false;

function type() {
    const el = document.getElementById("typing");
    let word = texts[i];

    el.textContent = word.substring(0, j);

    if (!del) j++;
    else j--;

    if (j == word.length) del = true;
    if (j == 0) { del = false;
        i = (i + 1) % texts.length; }

    setTimeout(type, 100);
}
type();