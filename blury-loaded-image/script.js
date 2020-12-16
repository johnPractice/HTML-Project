const bg = document.querySelector('section.bg');
const text = document.querySelector('div.text-loading');
let load = 0;
let repeat = setInterval(bluring, 30);

function bluring() {
    load++;
    if (load > 99) {
        clearInterval(repeat);
    }
    text.innerText = load + "%";
    text.style.opacity = 1 - (load / 100);
    bg.style.filter = `blur(${100-load}px)`;

}